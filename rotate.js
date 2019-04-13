var index = 1;
function changeBanner() {
    var list = document.getElementById('tickerContent').children;
    [].forEach.call(list, function (v, i) {
        ///Show the current item
        list[i].hidden = i !== index;
        if(i==index){
            list[i].className = "showup";
        }

    }
    );
    ///Rotate through the list
    index = (index + 1) % list.length;
}
window.onload = function () { setInterval(changeBanner, 5000) };

///auto-reload
/*window.setTimeout(function() {
    window.location.href =  window.location.href;
    }, 5000); */