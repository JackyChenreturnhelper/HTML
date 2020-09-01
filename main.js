
window.onresize = function(){
   var height= document.documentElement.clientHeight;
   var width = document.documentElement.clientWidth ;
   var aa=(1600/900).toFixed(2);
   var bb=(width/height).toFixed(2);
   if(aa>bb){
    document.getElementById("indeximg").style.height = height+"px";
   }else{
    document.getElementById("indeximg").style.height = "auto";
   }
}

var indeximg = document.getElementById("indeximg");

indeximg.addEventListener("click", function (event) {
    document.getElementById("indeximg").classList.add("display-no");
    document.getElementById("indexbody").classList.remove("display-no");
});
var indexmimg = document.getElementById("indexmimg");
indexmimg.addEventListener("click", function (event) {
    document.getElementById('indexmimg').className = '';
    document.getElementById("indexmimg").classList.add("display-no");
    document.getElementById("indexbody").classList.remove("display-no");
});