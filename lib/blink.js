var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)

  return md.replace(/(@@)(.*?)(@@)/g,"<blink>$2</blink>")
}
