var indeximg = document.getElementById("indeximg");

indeximg.addEventListener("click", function () {
    document.getElementById("indeximg").classList.add("display-no");
    document.getElementById("indexbody").classList.remove("display-no");
});