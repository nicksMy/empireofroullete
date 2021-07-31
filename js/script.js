function changeDisplay(x) {
    var myX = document.getElementById(x);
    var myXSetting = myX.style.display;

    if (myXSetting == "block") {
        myX.style.display = "none";
    } else {
        myX.style.display = "block";
    }
}
