function background() {
    document.body.style.backgroundColor = "white";
}

function light() {
    if (document.body.style.backgroundColor == "white"){
      document.body.style.backgroundColor = "black";  
    }
    else {
        document.body.style.backgroundColor = "white";
    }
}