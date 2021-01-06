window.onload = function() {
    function falert() {
      this.style.height == "1em" ? this.style.height = "auto":this.style.height = "1em"
    }
    let contents = document.getElementsByClassName('content');
    for (var i=0; i<contents.length; i++) {
      contents[i].addEventListener("click", falert, false);
    }
}
    

