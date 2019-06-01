var index = 1;
function changeBanner() {
    if(currentArray !== JSON.parse(localStorage.getItem("list"))){
        loadLines();
    }
    var list = document.getElementById('tickerContent').children;
    [].forEach.call(list, function (v, i) {
        ///Show the current item
        list[i].hidden = i !== index;
        if (i == index) {
            list[i].className = "showup";
        }
    }
    );
    ///Rotate through the list
    index = (index + 1) % list.length;
}
window.onload = function () {
    ///replace text
    var currentArray = [];
    loadLines();
    console.log="Lines loaded";
    ///Begin display
    var list = document.getElementById('tickerContent').children;
    list[0].className = "showup";
    list[0].hidden = 0;
    console.log="First line shown";
    ///Rest of the rotation
    if (list.length>=2){
        setInterval(changeBanner, 5000);
    }else{
        console.log="No looping effect";
    }
};
loadLines = function () {
    var linesArray = localStorage.getItem("list");
    var readArray = JSON.parse(linesArray);
    currentArray = readArray;
    var area = document.getElementById("tickerContent");
    area.innerHTML = "";
    for (var i = 0; i < readArray.length; i++) {
        area.innerHTML += "<p>" + readArray[i] + "</p>";
    }
}
///auto-reload
/*window.setTimeout(function() {
    window.location.href =  window.location.href;
    }, 5000); */