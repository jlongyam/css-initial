const fs = require('./fs.js')

// == config ==
const from = 'src/component/'
const to = 'dist/demo/'
const css_index = '_export.css'

// == function == 
// -- Utility
const quote = (str)=> (str.includes("'") === true ) ? "'" : '"'
// quote("@import url('typography/_export.css');")
//>'
function toRelative( base, url ) {
  let arr = url.split('/'), buffer = '', i = 0
  for( i; i < arr.length; i++ ) {
    if( arr[i] + '/' === base ) continue
    if( arr[i].length === 0 ) continue
    buffer += '../'
  }
  return buffer
}
//toRelative('dist/', 'dist/demo/')
//> ..
// -- Operation
function importIndex( file ) {
  let
    data = fs.file_read(file),
    arr = data.split('\n'),
    folder_list = []
    ;
  arr.forEach( l=> {
    let q = quote(l)
    let line = l.substring(l.indexOf(q)+1,l.lastIndexOf(q))
    let file = line.split('/').pop()
    let folder = line.substring(0, line.indexOf(file)).trim()
    if(l.length > 0 ) folder_list.push(folder)
    
  })
  return folder_list
}
function createFileIndex(location, content) {
  let rel = toRelative( 'dist/', location )
  let str_head = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${rel}initial.css" rel="stylesheet">
  <link href="${rel}_tweak.css" rel="stylesheet">
</head>
<body class="page">
`
  let str_body
  if( typeof content === 'string' ) str_body = content
  else str_body = `
  <ul>
    ${content.map(i=> {
      return `<li><a href="${i}index.html">${i}</a></li>\n    `    
    }).join('').trim()}
  </ul>
`
  let str_foot = `
</body>
</html>`
  return str_head + str_body + str_foot
}
function takeBodyContent(file) {
  let content = fs.file_read(file)
  let s_top = '<body class="page">'
  let s_bottom = '</body>'
  let str = content.substring(content.indexOf(s_top)+s_top.length, content.indexOf(s_bottom))
  return str
}
//takeBodyContent(from + 'typography/a-cite/demo.html')
function scanCssEntry( file_css ) {
  let obj_map
  if(fs.exists(file_css)) obj_map = importIndex(file_css)
  return obj_map
}
function removeFiles(path) {
  if(fs.exists(path+'/index.html')) fs.file_delete(path+'/index.html')
}
function removeFolder(path) {
  if(fs.exists(path)) fs.folder_delete(path)
}
function createFolder( path ) {
  fs.folder_create(path)
}
function scanObjectMap( obj_map, target_location ) {
  let file_index = createFileIndex( target_location, obj_map)
  fs.file_write(target_location+'index.html', file_index)
  obj_map.forEach(folder=> {
    let css_export = from+folder+css_index
    if(fs.exists(css_export)) { // _export.css
      removeFiles(target_location+folder)
      removeFolder(target_location+folder)
      createFolder(target_location+folder)
      let obj_map_next = scanCssEntry( css_export )
      // TODO
      let content = {}
      content[folder] = ''
      obj_map_next.forEach(file=> {
        let demo_path = from+folder+file+'demo.html'
        if(fs.exists(demo_path)) {
          content[folder] += takeBodyContent(demo_path)
        }
      }) 
      let file_target = target_location+folder+'index.html'
      if(!fs.exists(file_target)) {
        let content_index = createFileIndex(target_location+folder, content[folder])
        fs.file_write(file_target,content_index)
      }
    }
    else {
      console.log( css_export+ '  NOT_EXISTS')
    }
  })
}
// == exec ==
if(!fs.exists(to)) fs.folder_create(to)
let obj_map = scanCssEntry( from+css_index )
scanObjectMap( obj_map, to )
