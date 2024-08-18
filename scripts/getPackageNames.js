// module.exports = [
//   '@mobili-coffee/uploader',
//   '@mobili-coffee/button',
//   '@mobili-coffee/FormItem',
//   '@mobili-coffee/FormSearch',
//   '@mobili-coffee/TableSearch',
//   '@mobili-coffee/Select',
//   '@mobili-coffee/SelectCascader',
//   '@mobili-coffee/DatePicker',
//   '@mobili-coffee/TimePicker',
//   '@mobili-coffee/tabs',
//   '@mobili-coffee/Records',
//   '@mobili-coffee/DetailForm',
//   '@mobili-coffee/DetailFormPanel'
// ]

const fs = require('fs')
const path = require('path')
let arr = []

module.exports = filePath => {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err,files) => {
      if (err) {
        console.warn(err)
        reject(err)
      } else {
        files.forEach((filename, index) => {
          const filedir = path.join(filePath, filename)
          fs.readdir(filedir, (_err, _files) => {
            if (_err) {
              console.warn(_err)
              reject(_err)
            } else {
              _files.forEach(_filename => {
                if (_filename === 'package.json') {
                  const rawdata = fs.readFileSync(path.join(filedir, _filename))
                  arr.push(JSON.parse(rawdata).name)
                  if (files.length - 1 === index) {
                    resolve(arr)
                  }
                }
              })
            }
          })
        })
      }
    })
  })
}
