//myName adlı spana domla eriştik
let myName = document.getElementById("myName")
//Prompt yardımıyıla kullanıcıdan alınan değeri innerHTML'le yazdırdık.

myName.innerHTML = prompt("İsminizi giriniz.")
let onload = document.g
const showTime = () =>{
    let myClock = document.getElementById("myClock")

    let date = new Date()
    let gun  = date.getDay()
    let saat = date.getHours()
    let dakika = date.getMinutes()
    let saniye = date.getSeconds()
    
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    gun = gunler[date.getDay()]
    
    let current = `${saat}:${dakika}:${saniye} ${gun}`
    myClock.textContent = current

}
setInterval(showTime,1000)