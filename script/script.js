function digitalclock(){
    var date=new Date();
    var day=date.getDay();
    var hr=date.getHours()+'';
    var min=date.getMinutes()+'';
    var sec=date.getSeconds()+'';

    if(hr.length<2)
    hr='0'+hr;
    if(min.length<2)
    min='0'+min;
    if(sec.length<2)
    sec='0'+sec;
    var Day=['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
    var clock=Day[day]+ ' : '+hr+':'+min+':'+sec;
    document.getElementById('clock').innerHTML=clock;
    
}
digitalclock();
setInterval(digitalclock,1000);