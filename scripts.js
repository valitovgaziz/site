window.onload = function() {
    function falert() {
      alert("dsadsf");
    }
    let contents = document.getElementsByClassName('content');
    for (let i=0; i<contents.length; i++) {
      contents[i].addEventListener("click", falert, false);
    }
}
    

