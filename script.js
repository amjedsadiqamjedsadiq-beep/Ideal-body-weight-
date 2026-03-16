function calculateIBW(){

const height = parseFloat(document.getElementById("height").value);
const weight = parseFloat(document.getElementById("weight").value);
const gender = document.getElementById("gender").value;

const resultBox = document.getElementById("result");
const tipsBox = document.getElementById("tips");

if(!height || height<100 || height>250){
alert("Enter valid height");
return;
}

if(!weight){
alert("Enter your weight");
return;
}

if(gender===""){
alert("Select gender");
return;
}

let ibw;

if(gender==="male"){
ibw = 50 + 0.9*(height-152);
}else{
ibw = 45.5 + 0.9*(height-152);
}

ibw = ibw.toFixed(1);

resultBox.style.display="block";

resultBox.innerHTML =
`Ideal Weight : <strong>${ibw} kg</strong>`;

let tips="";

if(weight>ibw){

tips="⚠️ Your weight is above ideal. Try regular exercise and balanced diet.";

}

else if(weight<ibw){

tips="🍎 Your weight is below ideal. Increase healthy calories and protein.";

}

else{

tips="✅ Your weight is perfect. Maintain your lifestyle.";

}

tipsBox.innerHTML = tips;

/* SAVE HISTORY */

const historyItem = 
`Height: ${height} cm | Weight: ${weight} kg | Ideal: ${ibw} kg`;

let history = JSON.parse(localStorage.getItem("ibwHistory")) || [];

history.unshift(historyItem);

localStorage.setItem("ibwHistory",JSON.stringify(history));

displayHistory();

}

/* SHOW HISTORY */

function displayHistory(){

const historyList = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("ibwHistory")) || [];

historyList.innerHTML="";

history.slice(0,5).forEach(item=>{

const li=document.createElement("li");

li.textContent=item;

historyList.appendChild(li);

});

}

/* DARK MODE */

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

/* LOAD HISTORY ON START */

displayHistory();
