const btn = document.getElementById("advice-button");

const advice_id= document.querySelector(".advice-number");

const advice_description=document.querySelector(".advice-description");

//const id = Math.floor(Math.random()*100);
//const url = `https://api.adviceslip.com/advice/${id}`;
const url = `https://api.adviceslip.com/advice`;

btn.addEventListener("click",()=>{
    // console.log('done')
    fetch(url)
    .then(response  => response.json())
    .then( data => {
        console.log(data);
        advice_id.innerHTML = ` #${data.slip.id}`;
        advice_description.innerHTML =`"${data.slip.advice}"`;
    })
    
})
