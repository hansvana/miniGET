var serverURL = "http://www.setgetgo.com/randomword/get.php";

function success(data) {
  console.log(data);
}

miniGET(serverURL, success);
