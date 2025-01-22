function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;

  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhttpReq = new XMLHttpRequest();
  xhttpReq.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );

  xhttpReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttpReq.responseText);
    }
  };

  xhttpReq.send();
}

queryWikipedia(createElement);
