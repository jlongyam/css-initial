const fs = require('./build/fs.js')

const dist = 'dist/initial.css'
const main = 'src/_export.css'
const trace = []

function parseImport( path_target = 'src/_export.css' ) {
  let dir_root = path_target.substring(0,path_target.lastIndexOf('/')+1)
  let file_in = path_target.substring(path_target.lastIndexOf('/')+1)
  
  let link = []
  let file = []
  let str = ''

  let content = fs.file_read(dir_root + file_in)
  let arr = content.trim().split('\n')
 
  arr.forEach( line=> {
    if( line.includes('@import') ) {
      let quote = (line.includes("'")) === true ? "'" : '"'
      let clean_line = line.substring((line.indexOf(quote)+1),line.lastIndexOf(quote))
      let contain_slash = clean_line.includes('/')
      if(contain_slash) { // link
        link.push(clean_line)
      }
      else { // file
        file.push(clean_line)
      }
      
      parseImport(dir_root+clean_line)
    }
    else {
      str += line +'\n' // OUTPUT
    }
  })
  let obj = {
    link: link,
    file: file,
    str: str
  }
  trace.push(obj)
  //return obj
}
parseImport()
console.log("\n=====JSON======\n\n"+JSON.stringify(trace,0,2))
fs.file_write(__dirname+'/log.txt',JSON.stringify(trace,0,2))
fs.file_write(dist,'')
trace.forEach(i=> {
  fs.file_append(dist,i.str+'\n')
})