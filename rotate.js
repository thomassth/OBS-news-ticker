var index = 1;
///Animate & change text
function changeBanner() {
    if(JSON.parse(localStorage.getItem("title"))!== titleLoop){
        var title = document.getElementById('tickerHeaderText').children;
        titleLoop=[JSON.parse(localStorage.getItem("title"))]
        title[0].textContent=titleLoop;
        title[0].className="showup";
       
       };
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
    ///load title
    var titleLoop=[];
    var title = document.getElementById('tickerHeaderText').children;
    title[0].className="showup";
    titleLoop=[JSON.parse(localStorage.getItem("title"))];
    title[0].textContent=titleLoop;
    ///load text
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
    if(linesArray==null){
        readArray = ["ERROR: no lines saved.","Please change the lines in tickerSet."]
    }
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
