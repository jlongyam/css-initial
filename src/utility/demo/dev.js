// file.html?[view=][unstyle[&debug]]
if( location.search.includes('unstyle') ) {
  // last <link>
  const LINKS = document.querySelectorAll('link')
  const N = LINKS.length - 1
  LINKS[N].remove()
}
if( location.search.includes('debug') ) {
  document.body.classList.add('debug')
}