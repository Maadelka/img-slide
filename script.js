document.body.style.backgroundColor= "darkblue"
let hasil = document.getElementById('hasil')
let back = document.getElementById('back')
let next = document.getElementById('next')
let img = document.getElementById('img')
let link = document.getElementById('link')

let x = 0
let gambar = [0,1,2,3]
img.src= `img/${x}.jpg`

// ================================ img slide show setiap 3 detik
setInterval(function(){
    if(x >= 3){
        x = 0
        hasil.innerHTML= gambar[x] 
    }else{
        x++
        hasil.innerHTML= gambar[x]
    }
    img.src= `img/${x}.jpg`
    link.href = `link/${x}.html`
},3500)

// ======================================= next
next.addEventListener('click',function(){
    if(x >= 3){
        x = 0
        hasil.innerHTML= gambar[x] 
    }else{
        x++
        hasil.innerHTML= gambar[x]
    }
    img.src= `img/${x}.jpg`
    link.href = `link/${x}.html`
})

// ======================================= back
back.addEventListener('click',function(){
    if(x <= 0){
        x = 3
        hasil.innerHTML= gambar[x] 
    }else{
        x--
        hasil.innerHTML= gambar[x]
    }
    img.src= `img/${x}.jpg`
    link.href = `link/${x}.html`
})

// ====else
hasil.innerHTML= gambar[x]
link.href = `link/${x}.html`




//========================================= setengah segitiga bintang
// for(let i=1; i<=10; i++){  
//     for(let j=1; j<=i; j++){  
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }
// for(let k=10; k>=1; k--){  
//     for(let l=1; l<=k; l++){  
//         document.write(`*`)
//     }
//     document.write(`<br>`)
// }



// ======================================= segitiga bintang
// var s = '';
// var b = 9;
// for(var h = 1; h <= b; h++){
//     for(var i = 1; i <= b - h; i++){
//         s += ' ';
//     }
//     for(var j = 1; j < 2 * h; j++){
//         s += '*';
//     }
//     s += '\n';   
// }

// console.log(s);