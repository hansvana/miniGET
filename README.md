![miniGET](logo.png)

------

miniGET is a tiny JavaScript library aimed at hiding all that ugly XMLHttpRequest code.

## Getting Started

* [![Download](http://mouseover.nl/media/download.jpg)](https://raw.githubusercontent.com/hansvana/miniGET/master/dist/miniGET.min.js) the JavaScript file (right-click, save file as...) and save it to your project folder.
* Import it in your HTML file **BEFORE** your own code:
```html
<script src="miniGET.min.js"></script>
```
* Use it in your own code:
``` javascript
var serverURL = "http://www.setgetgo.com/randomword/get.php";

function success(data) {
  console.log(data);
}

miniGET(serverURL, success);
```

* You can also provide a fail function that is called when the connection or request fails:
``` javascript
miniGET(serverURL, success, fail);
```
