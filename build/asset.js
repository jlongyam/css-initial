const fs = require('./fs.js')

const to = 'dist/'
const file = {
  tweak: 'src/_tweak.css',
  dev: 'src/utility/demo/dev.css',
  page: 'src/utility/layout/box/page.css'
}
let tweak_content = `
@import "demo/dev.css";
@import "demo/page.css";

`
fs.file_write(to+'_tweak.css',tweak_content+fs.file_read(file.tweak))
fs.file_write(to+'demo/dev.css', fs.file_read(file.dev))
fs.file_write(to+'demo/page.css', fs.file_read(file.page))
