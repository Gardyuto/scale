'use strict'

const line_1 = document.querySelector(".line_1")
let procent = 0
line_1.style.width = +procent

function f_1() {


    if (procent < 99.7) {
        procent += 10
    }
    console.group('+')
    console.log(procent)
    console.groupEnd()
    line_1.style.width = procent + "%"
}

document.querySelector(".plus_1").onclick = f_1





line_1.style.width = +procent

function f_2() {
    if (procent > 0) {
        procent -= 10
    }
    console.group('-')
    console.log(procent)
    console.groupEnd()
    // procent -= 10
    line_1.style.width = procent + "%"
}


document.querySelector(".minus_1").onclick = f_2



const plus_2 = document.querySelector(".plus_2")
const line_2 = document.querySelector(".line_2")
const loading = document.querySelector(".loading")


function creatFun() {
    const intervalFun = setInterval(function () {

      

        if (procent < 99.9) {
            procent += 0.1
            loading.innerHTML = ((procent).toFixed(1)) + "%"

        } else {

            clearInterval(intervalFun)
        }

        line_2.style.width = procent + "%"
    }, 10)



   
}



plus_2.onclick = creatFun



// let r = 30;

// function testM() {




//     if (r > 0) {
//         r -= 10
//     }


//     console.log(r);
// }









const box3 = document.querySelector('.box3')
const line_3 = document.querySelector(".line_3")



let N = 0

function fun_3() {
if(N === 21) return;
  
    N++;



 

    
    switch(N){
        case 21 : line_3.innerHTML += '<div class="box3 lastElem"></div>';break;
        default : line_3.innerHTML += '<div class="box3"></div>'
    }
}



function fun_4() {

}
let to = 10;

if(to === 5){
    console.log(5)
} else if (to === 8) {
    console.log(8);
} else if (to === 10) {
    console.log(10);
} else {
    console.log('else');
};

let qo = 55;

if(qo === 50){
console.log(50);
} else if(qo === 55){
    console.log(55);
}

switch(qo){
    case 50 : console.log(50);break;

}


switch(to){
    case 5 : console.log(5);break;
    case 8 : console.log(8);break;
    case 10 : console.log(10);break;
    default : console.log('else')

}


document.querySelector(".plus_3").onclick = fun_3
document.querySelector(".minus_3").onclick = fun_4


// function 


const plus_4 = document.querySelector(".plus_4")
const scale_4 = document.querySelector(".scale_4")
const line_4 = document.querySelector(".line_4")
let procent_4 = 100



function fun_5() {
    setInterval(function () {

        // console.log(1);

        procent_4 -= 0.1

        line_4.style.width = procent_4 + "%"
    }, 10)
}
// plus_4.onclick = fun_5

document.querySelector(".plus_4").onclick = fun_5





