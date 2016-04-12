window.onload = function() {

  function gaSend() {
    var param = "v=1&tid=UA-00000000-1&cid=0000000&t=pageview&dp=%2Fga.js";
    var url = "http://www.google-analytics.com/collect";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(param);
  };
  gaSend();
};
