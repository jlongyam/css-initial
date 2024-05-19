const path = require('path')
const fs = require('fs')

class FS {
  get sep() {
    return path.sep
  }
  get current() {
    return __dirname + this.sep
  }
  exists(target_path) {
    return fs.existsSync(target_path)
  }
  folder_list(location = this.current) {
    return fs.readdirSync(location)
  }
  folder_create(new_path = this.current+'folder') {
    fs.mkdirSync(new_path)
  }
  folder_delete(target_path = this.current+'folder') {
    fs.rmdirSync(target_path)
  }
  file_write(file_path = this.current+'file.txt', file_content = '') {
    fs.writeFileSync(file_path, file_content)
  }
  file_append(file_path = this.current+'file.txt', file_content = '') {
    fs.appendFileSync(file_path, file_content)
  }
  file_read(file_target = this.current+'file.txt') {
    return fs.readFileSync(file_target,'utf-8')
  }
  file_delete(file_target = this.current+'file.txt') {
    fs.unlinkSync(file_target)
  }
}
module.exports = new FS()