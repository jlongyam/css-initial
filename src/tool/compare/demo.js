// <script defer>
document.querySelector('.tab-item._button').addEventListener('click', ()=> {
  let indicator = document.querySelector('#indicator')
  let iframes = document.querySelectorAll('iframe')
  if( indicator.textContent === 'OFF' ) {
    indicator.textContent = 'ON'
    iframes[0].setAttribute( 'src', 'demo.html?unstyle&debug' )
    iframes[1].setAttribute( 'src', 'demo.html?debug' )
    return
  }
  if( indicator.textContent === 'ON' ) {
    indicator.textContent = 'OFF'
    iframes[0].setAttribute( 'src', 'demo.html?unstyle' )
    iframes[1].setAttribute( 'src', 'demo.html' )
  }
})
/*
  <main class="compare">
    <nav class="compare-tab">
      <label class="tab-item" for="switch_1">Before</label>
      <label class="tab-item _button">Debug: <b id="indicator">OFF</b></label>
      <label class="tab-item" for="switch_2">After</label>
    </nav>
    <div class="compare-view">
      <section class="view-split">
        <div class="split_half">
          <input id="switch_1" class="switch-radio" type="radio" name="switch" checked>
          <iframe class="compare-iframe switch-target" src="demo.html?unstyle"></iframe>
        </div>        
        <div class="split_half">
          <input id="switch_2" class="switch-radio" type="radio" name="switch">
          <iframe class="compare-iframe switch-target" src="demo.html"></iframe>
        </div>
      </section>
    </div>
  </main>
*/