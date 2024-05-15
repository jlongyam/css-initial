define({ content: `
<div>
    <div class="code" data-name="sub"></div>
    <div class="empty"></div>
    H<sub>2</sub>O
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="sub"></div>
    <div class="empty"></div>
    Copyright<sup>&copy;</sup>
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="small"></div>
    <div class="empty"></div>
    This is <small>sequence of small</small> text.
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="h1 > sub"></div>
    <div class="empty"></div>
    <h1>H<sub>2</sub>O</h1>
    <p data-random-paragraph=2></p>
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="h3 > sup"></div>
    <p data-random-sentence=9></p>
    <h3>Copyright<sup>&copy;</sup></h3>
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="h1 > small"></div>
    <h1>Heading 1 with <small>Small</small></h1>
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="h3 > small"></div>
    <h3>Detail information. <small>NEW</small></h3>
    <div class="empty"></div>
  </div>
  <div>
    <div class="code" data-name="h6 > small"></div>
    <h6>Heading 6 with <small>SMALL</small></h6>
    <div class="empty"></div>
  </div>
`})