//Conservative and Aggressive Portion
var check1=document.getElementById("checkbox1");
var check2=document.getElementById("checkbox2");
var aggressive=document.getElementById("aggressive");
var conservative=document.getElementById("conservative");
if(check1.checked){
    conservative.style.display='block';
    aggressive.style.display="none";
}
else{
    aggressive.style.display='block';
    conservative.style.display="none";
}
check1.addEventListener('change',function(e){
    check1=document.getElementById("checkbox1");
    if(check1.checked){
         conservative.style.display='block';
         aggressive.style.display="none";
    } 
});

check2.addEventListener('change',function(e){
    check2=document.getElementById("checkbox2");
    if(check2.checked){
        aggressive.style.display='block';
        conservative.style.display="none";
    } 
});
//End Conserva tive and Aggressive portion


var moneystring=document.getElementsByClassName("money");
var money=[];
var len=moneystring.length;

for(let i=0;i<len;i++){
   let x=moneystring[i].innerText;
   x=parseInt(x);
   money[i]=x;
}
//ALL CURRENCY FUNCTIONS
function usd(){
    let i;
    for(i=0;i<len;i++){
       let x=money[i];
       moneystring[i].innerText="$"+x;
    } 
}
function gbp(){
    let i;
    for(i=0;i<len;i++){
       let x=money[i];
       x=Math.ceil(x*0.76);
       moneystring[i].innerText="£"+x;
    } 
}
function eur(){
    let i;
    for(i=0;i<len;i++){
       let x=money[i];
       x=Math.ceil(x*0.84);
       moneystring[i].innerText="€"+x;
    } 
}

function aud(){
    let i;
    for(i=0;i<len;i++){
       let x=money[i];
       x=Math.ceil(x*1.39);
       moneystring[i].innerText="A$"+x;
    } 
}
function capital(x){
    for(let i=0;i<len;i++){
        let z=money[i]*x;
        moneystring[i].innerText=z;
    }
}
console.log(capital(3));
//START USD PORTION
var usdoller=document.getElementById("usd");
if(usdoller.checked){
    usd();
}

usdoller.addEventListener('change',function(e){
   var usdoller=document.getElementById("usd");
    if(usdoller.checked){
        usd();
    } 
});
//END USD PORTION

//START GBP SECTION

var gbpound=document.getElementById("gbp");
if(gbpound.checked){
    gbp();
}

gbpound.addEventListener('change',function(e){
   gbpound=document.getElementById("gbp");
    if(gbpound.checked){
        gbp();
    } 
});
//END GBP SECTION

//START EUR SECTION

var euro=document.getElementById("eur");
if(euro.checked){
    eur();
}

euro.addEventListener('change',function(e){
   euro=document.getElementById("eur");
    if(euro.checked){
        eur();
    } 
});
//END EUR SECTION
//START AUD SECTION

var audoller=document.getElementById("aud");
if(audoller.checked){
    aud();
}

audoller.addEventListener('change',function(e){
   audoller=document.getElementById("aud");
    if(audoller.checked){
        aud();
    } 
});
//END AUD SECTION

