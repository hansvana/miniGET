(global => {
  global.miniGET = (url, callback = ()=>{}, failed = (t) => {console.error('😣 The connection failed because: '+t)}) => {
    if (!url || !success) {
      console.error("😣 Server url or callback function not defined.");
      return;
    }

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        callback(request.responseText);
      } else {
        failed(request.responseText);
      }
    };

    request.onerror = function() {
      failed("connection error");
    };

    request.send();
  }
})(window);
