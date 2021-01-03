window.onload = function() {
    function falert() {
      alert(this.getAttribute("height"));
      this.setAttribute("height", "auto");
      alert(this.getAttribute("height"));
    }
    let contents = document.getElementsByClassName('content');
    for (var i=0; i<contents.length; i++) {
      contents[i].addEventListener("click", falert, false);
    }
}
    

