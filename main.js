
//1-2
let box1 = document.getElementById("box1");
let btn2 = document.querySelector(".btn_2");

btn2.addEventListener("click", function(){ 
    document.getElementById("box1"); box1.remove();
 });

let btn3 = document.querySelector(".btn_3")
btn3.addEventListener("click", function(){ 
    box1.classList.toggle("hidden"); 
 });

 //3
 let boxs = document.querySelectorAll(".box3");
 let btn4 = document.querySelector(".btn_4");
btn4.addEventListener("click", function()
 { 
    boxs.forEach(function(box){
        box.classList.toggle('hidden')
    });   
 });
 //4

 //5
 let yellow = document.querySelector(".yellow");

 yellow.addEventListener("click",func);
 
function func()
{
     alert("Привет");
     yellow.removeEventListener("click",func)
     yellow.addEventListener("click",function(){
     yellow.classList.add("hidden")
     });
}
//6
let red_square = document.querySelector(".red-square");
let btn_red = document.querySelector(".btn_red");
btn_red.addEventListener("mouseover",mouse)
function mouse()
{
    red_square.classList.remove("hiden")
    btn_red.removeEventListener("mouseover",mouse)
    btn_red.addEventListener("mouseout",function(){
    red_square.classList.add("hiden")
    });
}
//7
let input2 = document.querySelector(".input2");
let green = document.querySelector(".green");
input2.addEventListener("focus",inp);
function inp()
{
    green.classList.remove("hiden")
    input2.removeEventListener("focus",inp)
    input2.addEventListener("input",function()
    {
        green.classList.add("hiden")
    });
}
//8
let btn8 = document.querySelector(".btn8");
let img = document.querySelector(".image");

btn8.addEventListener("click",function()
{
    img.classList.remove("hidden");
    let inputImg = document.querySelector('.input8').value;
    img.src = inputImg
});
//9
let btn9 = document.querySelector(".btn9");
let images = document.querySelector(".images");

btn9.addEventListener("click",function()
{
    let textarea9 = document.getElementById("textarea9").value.split();


    for(let i = 0;i <= textarea9.length; i++ )
    {
        let img = new Image(300);
        img.src = textarea9[i];
        images.appendChild(img);
    }    
});
// 10
document.body.onmousemove =
function(event){
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY
}

//11
let lang = navigator.language
document.querySelector('.lang').innerHTML = lang;

//12
navigator.geolocation.getCurrentPosition(pos);
function pos(positon){
    let latitude = positon.coords.latitude;
    let longitude = positon.coords.longitude;
    document.querySelector('.longitude').innerHTML = longitude
    document.querySelector('.latitude').innerHTML = latitude

}
//13
let localStorage13 = document.querySelector(".localStorage");
let cookies13 = document.querySelector(".cookies");
let sessionStorage13 = document.querySelector(".sessionStorage");

localStorage13.addEventListener('DOMSubtreeModified', function(){
    localStorage.setItem('local',localStorage13.innerHTML )
});
sessionStorage13.addEventListener("DOMSubtreeModified",function()
{
    sessionStorage.setItem("session",sessionStorage13.innerHTML) 
});
window.addEventListener("load",function(){
    localStorage13.innerHTML = localStorage.getItem('local');
    sessionStorage13.innerHTML = sessionStorage.getItem('session');
    cookies13.innerHTML = document.cookie
});
//14
let btn14 = document.querySelector(".btn14");

btn14.addEventListener('click',function(){
    $('html, body').animate({
        scrollTop: 0
    });
});
//15
let box151 = document.querySelector(".box15");
let box152 = document.querySelector(".box-15");

box151.addEventListener("click",alert1);

function alert1()
{
 alert("box151")
};

box152.addEventListener("click",alert2);

function alert2()
{
    alert("box152")
    box151.removeEventListener("click",alert1)
};
//16
let btn16 = document.querySelector(".btn16");
let box16 = document.querySelector(".box16");
let body = document.querySelector('body');

btn16.addEventListener("click",function ()
{
    box16.style.display="block";
    body.classList.add("overflow");
});
box16.addEventListener("click",function()
{
    box16.style.display="none";
    body.classList.remove("overflow");
});
//17
let go =document.querySelector('.sumbit');
go.addEventListener('click',stop);

function stop(event)
{
    event.preventDefault()
}
//18
let inputFile = document.querySelector(".inputfile");

inputFile.addEventListener("dragover",function()
{
    inputFile.classList.add("over")
});
inputFile.addEventListener("dragleave",function()
{
    inputFile.classList.remove("over")
});
inputFile.addEventListener("drop",function()
{
    inputFile.classList.remove("over")
    inputFile.classList.add("drop")
});

// CSV
let csvText  = document.getElementById('csvText');
let resultBtn = document.querySelector('.result');
let text = document.querySelector('#text');
let resultDiv = document.querySelector('#results');

function ParseCsv(){
    let csValue = csvText.value;
    let arrCvs = csValue.split('\n');
    let cvsFilter = arrCvs.filter(item => !item.includes('#') && !item.includes('  '));
    let maps = cvsFilter.map(function(elem)
    {
        let lineForMap = elem.split(',');
        let map = 
        {
            x : lineForMap[0],
            y : lineForMap[1],
            name : lineForMap[2],
            population : lineForMap[3]

        }
        return map
    });
    let SortMap =  maps.sort((a , b) => b.population - a.population)
    let topCities = SortMap.slice(0,10);
    let finalObj = topCities.reduce((a,c,i) =>{
        a[c.name] = {
            population : c.population,
            raiting : i + 1
        }
        return a
    },{})
    console.log(finalObj)

    return finalObj
};
resultBtn.addEventListener('click',function()
{
    let cont = text.value;
    let afterParse =  ParseCsv();
    resultDiv.innerHTML = `${cont} - немає у рейтингу`;
    let lineForRes = `${cont}-${afterParse[cont].raiting} місце у Топ 10 міст України з населенням ${afterParse[cont].population}`;
    resultDiv.innerHTML = lineForRes;
 });
