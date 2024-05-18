function $module( config ) {
  let collection = []
  config.dependency.forEach( url=> {
    if(!collection.includes(url)) {
      collection.push(url)
      let file = url.split('.').pop(), d = document;
      if( file === 'css' ) {
        let link = d.createElement('link')
        link.href = url
        link.rel = "stylesheet"
        d.head.insertBefore(link,document.scripts[0])
      }
      else if( file === 'js' ) {
        let script = d.createElement('script');
        script.src = url
        script.async = false
        script.defer = true
        d.head.appendChild(script)
      }
      else {
        console.log('file type not supported')
      }
    }
  })
  window.addEventListener('load', window[config.name] )
} 
let
  d = document,
  js_lib = d.currentScript.getAttribute('src').replace('/demo/dev.js','/js/')
  ;
$module({ name: 'start',
  dependency: [
    js_lib+'ui.js',
    js_lib+'displace.js',
    js_lib+'configBox.js',
    js_lib+'config-box.css'
  ]
})
/*
$return(()=> {
  return false
})
*/
function start() {
  function unstyle() {
    const LINKS = document.querySelectorAll('link')
    const N = LINKS.length - 2
    LINKS[N].toggleAttribute('disabled')
  }
  function debug() {
    document.body.classList.toggle('debug')
  }
  configBox({
    id: 'config_box',
    title: 'Dev',
    style: {
      bottom: '0',
      right: '0',
      width: '100px'
    },
    body: [
      { type: 'action', content: 'Debug', onclick: (el)=> {debug()} },
      { type: 'action', content: 'Unstyle', onclick: (el)=> {unstyle()} },
      { type: 'action', content: 'Compare' },
      { type: 'action', content: 'Emulator' }
    ]
  })
}/*
// file.html?[view=][unstyle[&debug]]
if( location.search.includes('unstyle') ) {
  // last <link>
  const LINKS = document.querySelectorAll('link')
  const N = LINKS.length - 2
  LINKS[N].remove()
}
if( location.search.includes('debug') ) {
  document.body.classList.add('debug')
}

window.addEventListener('load', ()=> {
  $script.path(js_lib)
  $require.css([js_lib+'config-box.css'])
  $include(['ui.js','displace.js','configBox.js'], ()=> {
    
  })
})
*/