const hamburger = document.querySelector('.hamburger');
const doctitle = document.title;
const menu = document.querySelector('.menu');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('menu-active')
});

window.addEventListener('blur',()=>{
    document.title = "Come Back :(";
});

window.addEventListener('focus',()=>{
    document.title = doctitle;
});

window.addEventListener('scroll',()=>{
    hamburger.classList.remove('is-active')
    menu.classList.remove('menu-active')
});


setInterval(()=>{
    const day = document.querySelector('.day');
    const date = document.querySelector('.date');
    const newDate = new Date();
    const hari = newDate.getDay();
    const strHari = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const tanggal = newDate.getDate();
    const bulan = newDate.getMonth();
    const strBulan = ['Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'];
    const tahun = newDate.getFullYear();
    const jam = newDate.getHours();
    const menit = newDate.getMinutes();
    const detik = newDate.getSeconds();

    if (jam>12) {
        waktu = jam % 12 + "." + menit + "." + detik + " PM"
    }else{
        waktu = jam % 12 + "." + menit + "." + detik + " AM"
    }

    day.innerHTML = strHari[hari];
    date.innerHTML = tanggal + " " + strBulan[bulan] + " " + tahun + " | " + waktu ;    
},1000);
    
