var baslaMs,bitirMs;

function baslangicSaliseHesapla(){
    toplamsure.innerHTML="";
    var simdi = new Date();
    baslaMs = simdi.getTime();
}
function bitisSaliseHesapla(){
    var simdi = new Date();
     bitirMs = simdi.getTime();
}
function farkHesapla(){
    var farkMs = bitirMs-baslaMs;
    var farkSaniye = farkMs/1000;
    var farkDakika = farkSaniye/60;
    var farkSaat = farkDakika/60;
    var farkGun = farkSaat/24; // 1 Gün = 86,400,000 milisaniye.

    while(farkMs>=1000){farkSaniye++; farkMs-=1000;}
    while(farkSaniye>=60){farkDakika++; farkSaniye-=60;}
    while(farkDakika>=60){farkSaat++; farkDakika-=60;}
    while(farkSaat>=24){farkGun++;farkSaat-=24;}
    farkSaniye = Math.floor(farkSaniye);
    farkDakika = Math.floor(farkDakika);
    farkSaat = Math.floor(farkSaat);
    farkGun = Math.floor(farkGun);

   toplamsure.innerHTML="Geçen süre: "+farkGun+" Gün "+farkSaat+" Saat "+farkDakika+" Dakika "+farkSaniye+" Saniye "+farkMs+" Milisaniye";


}





