let isim = prompt("Lütfen İsminizi Girin")
let myName= document.querySelector("#myName")
myName.innerHTML = isim

function showTime(){
    var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	document.write(saat+":"+dakika+":"+saniye+" "+gun);
}