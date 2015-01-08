var fs = require("fs")

var insertCss = require("insert-css");
var css = fs.readFileSync( __dirname + "/css/mobilestyle.css" )
insertCss(css);

var Layout = fs.readFileSync( __dirname + "/code/views/mobilelayout.html" )
_3vot.el.innerHTML = Layout;

