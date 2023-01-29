window.onload = function getTime(){

    var time=new Date()

    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    
    var day=time.getDate();
    var month=time.getMonth();
    var year=time.getFullYear();

    /*Aşağıda Koşul belirledik eğer 
    saat,dakika veya saniye 0'dan küçükse
    başına sıfır yazmak için
    if else ile de yazılabilirdi
    */

    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;

    
    month=month<10?"0"+(month+1):month;
    


    document.getElementById("hour").innerText=hour+":";
    document.getElementById("minutes").innerText=minute+":";
    document.getElementById("second").innerText=second;

    document.getElementById("tarih").innerText=day+"/"+month+"/"+year;

    var inter=setInterval(getTime,1000);
}