document.body.onload = () => {
    let name = prompt('Lütfen isminizi giriniz:');
    document.querySelector("#name").innerHTML=` ${name}`; 
    setInterval(function(){ getTime(); }, 1000);
}
const getTime = () => {
    const date = new Date();
    let hours=date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate().toString();
    let month = date.getMonth();
    let year = date.getFullYear();
    hours<10? hours="0"+hours : hours=hours;
    minute<10? minute="0"+minute : minute=minute;
    seconds<10? seconds="0"+seconds : seconds=seconds;
    day<10? day="0"+day : day=day;
    month<10? month="0"+month : month=month;
    
    document.querySelector("#time").innerHTML=` ${hours}:${minute}:${seconds} ${day}/${month}/${year}`;
}