console.log('This is tutorial 60');

function func(){

let tm=new Date(); 

let hours=tm.getHours();
let minutes=tm.getMinutes();
let seconds=tm.getSeconds();

let MM=(hours>12?"PM":"AM");


hours=(hours==12?"00":hours);

hours=(hours>12?hours-12:hours);

hours=(hours<10?"0":"")+hours;
minutes=(minutes<10?"0":"")+minutes;
seconds=(seconds<10?"0":"")+seconds;

let hou=document.getElementById("box1");
// hou.innerHTML=hours;

let min=document.getElementById("box2");
// min.innerHTML=minutes;
let sec=document.getElementById("box3");
// sec.innerHTML=seconds;

let clc=document.getElementById("clockid");
let timeinclock=hours+":"+minutes+":"+seconds+"|"+MM;
console.log("lets : ",timeinclock);
clc.innerHTML=timeinclock;

// console.log("Hours : ",hours);
// console.log("minutes : ",minutes);
// console.log("seconds : ",seconds);

}

setInterval(() => {
    func();
}, 1000);