let isim = prompt("Lütfen İsminizi Girin")
let myName= document.querySelector("#myName")
myName.innerHTML = isim

function showTime(){
    var tarih=new Date();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var gun = gunler[tarih.getDay()]
	var time = saat+":"+dakika+":"+saniye+" "+gun;
    document.querySelector("#myClock").innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();