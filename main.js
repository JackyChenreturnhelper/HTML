
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
    waithide("indeximg");
    document.getElementById("indexbody").classList.remove("display-no");
});
var indexmimg = document.getElementById("indexmimg");
indexmimg.addEventListener("click", function (event) {

    waithide("indexmimg");
    document.getElementById("indexbody").classList.remove("display-no");
});

function waithide(indeximg)
{
    var obj = document.getElementById(indeximg);

    obj.style.opacity = '0';

    window.setTimeout(

    function removethis()

    {

     obj.style.display='none';

    }, 300);
}