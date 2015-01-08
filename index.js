var fs = require("fs")

var insertCss = require("insert-css");
var css = fs.readFileSync( __dirname + "/css/style.css" )
insertCss(css);

var Layout = fs.readFileSync( __dirname + "/code/views/layout.html" )

_3vot.el.innerHTML = Layout;


var twitterController = require("./code/controllers/twitterController");
var facebookController = require("./code/controllers/facebookController");
var videoController= require("./code/controllers/videoController");
