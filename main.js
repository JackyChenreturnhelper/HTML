imageswh();
window.onresize = function(){
    imageswh();
}

var indeximg = document.getElementById("indeximg");

indeximg.addEventListener("click", function (event) {
    waithide("indeximg");
    waithide("indexmimg");
    document.getElementById("indexbody").classList.remove("display-no");
});
var indexmimg = document.getElementById("indexmimg");
indexmimg.addEventListener("click", function (event) {

    waithide("indexmimg");
    waithide("indeximg");
    document.getElementById("indexbody").classList.remove("display-no");
});
function imageswh(){
    var height= document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth ;
    var aa=(1600/900).toFixed(2);
    var bb=(width/height).toFixed(2);
    if(aa>bb){
     document.getElementById("indeximg").style.height = height+"px";
    }else{
     document.getElementById("indeximg").style.height = "auto";
    }

    document.getElementById("areaid").coords =document.body.clientWidth/1.5 +","+document.body.clientHeight/1.5+","+document.body.clientWidth+","+document.body.clientHeight;
}

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

function getMousePos(event) {
    var e = event || window.event;
    return {'x':e.screenX,'y':e.screenY}
}