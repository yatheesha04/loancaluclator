const amount=document.getElementById("amount")
const intrestrate=document.getElementById("intrest")
const years=document.getElementById("years")

const monthlyPayment=document.getElementById("monthly-payment")
const totalPay=document.getElementById("total-payment")
const totalintrest=document.getElementById("total-intrest")

const formbtn=document.getElementById("loan-form")
formbtn.addEventListener("submit",function(e){
  e.preventDefault()
  var result=document.getElementById("result")
  result.style.display="none"
  var loding=document.querySelector(".loding")
  loding.style.display="block"
  setTimeout(calculate,2000)
})
function calculate()
{
  
  const principal=parseFloat( amount.value);
  const calintrest=parseFloat(intrestrate.value)/100/12;
  const calPayments=parseFloat(years.value)*12

  const x=Math.pow(1+calintrest,calPayments)
  const monthly=(principal*x*calintrest)/(x-1)
  if(isFinite(monthly)){
    monthlyPayment.value=monthly.toFixed(2)
    totalPay.value=(monthly*calPayments).toFixed(2)
    totalintrest.value=((monthly*calPayments)-principal).toFixed(2)
    var result=document.getElementById("result")
    result.style.display="block"
   var loding=document.querySelector(".loding")
  loding.style.display="none"


  }else{
   showerror("please check Number")
   var loding=document.querySelector(".loding")
  loding.style.display="none"
  }

}
function showerror(error){
  const errordiv=document.createElement("div");
  const card=document.querySelector(".card")
  
  const heading=document.querySelector(".heading")
  errordiv.className="alert alert-danger"
  errordiv.appendChild(document.createTextNode(error))
  console.log(card)
  card.insertBefore(errordiv,heading)
  setTimeout(clearalert,3000)
}
function clearalert(){
  document.querySelector(".alert").remove()

}
