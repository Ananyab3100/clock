
const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');


function getTime(){
    const dt =new Date()
    const sec = dt.getSeconds();
    console.log(sec);
    const secondsDegree = ((sec/60)*360) - 90;
    secHand.style.transform = `rotate(${secondsDegree}deg)`;
  
  

    const min = dt.getMinutes()
    console.log(min);
    const minutesDegree = ((min/60)*360) -90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;
 
  


    const hr = dt.getHours()
    console.log(hr);
    const hoursDegree = ((hr/12)*360) -90;
    hrHand.style.transform = `rotate(${hoursDegree}deg)`;
 
}
  setInterval(getTime,1000);
