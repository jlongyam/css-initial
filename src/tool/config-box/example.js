$include.css(['config-box.css'])
$include([
  '../js/displace.min.js',
  '../js/ui.min.js',
  './configBox.js'
],()=> {
  let option = {
    id: 'my_config_box',
    title: 'Config',
    drag: true,
    style: {
      right: '20px',
      top: '20px'
    },
    body: [
      { type: 'action', content: 'Cancel', onclick: ()=>{ alert('OK') } }
    ]
  }
  configBox( option, config_box )
  option.body.push({ type: 'action', content: 'Exit', onclick: ()=> { my_config_box.remove() } })
  btn_cfg.addEventListener('click', ()=> {
    configBox({
      title: 'Other cfg',
      style: { top: '20px' },
      body: [
        { type: 'text', content: 'Hello world' }
      ]
    }) 
    
  })
})