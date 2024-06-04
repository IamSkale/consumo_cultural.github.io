function openTab(evt, num) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-btn");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(num).style.display = "block";
    evt.currentTarget.className += " active";
}