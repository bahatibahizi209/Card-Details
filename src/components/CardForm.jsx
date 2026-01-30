
import { useState } from "react"
import CardFormFields from "./CardFormFields"
import CardPreview from "./cardpreview"
import { number, object } from "prop-types"
import formatCardNumber from "../utils/formatcardnumber"
function CardForm() {

  const [cardData,setCardData]=useState({
    name:"",
    number:"",
    expMonth:"",
    expYear:"",
    cvc:"",
  })
  const [flipped,setFlipped]=useState(false);
  const [error,setError]=useState({})
  const onchangeField=(field,value)=>{
    setError((prev)=>({...prev,[field]: ""}))
   if(field === "name"){
  const v =value.replace(/[^0-9]/g, "");
  if(v.length <=50){
    setCardData((prev)=>({...prev,name:v}));
  }
  return;
  }
    if(field === "number"){
      const formated=formatCardNumber(value) 
      if (formated.replace(/\s/g, "").length<=16){
        setCardData((prev)=>({...prev,number:formated}))
      }
      return;
    }
  if(field === "expMonth"){
  const v =value.replace(/[^0-9]/g, "");
  if(v.length <=2){
    setCardData((prev)=>({...prev,expMonth:v}));
  }
  return;
  }
  if(field === "expYear"){
  const v =value.replace(/[^0-9]/g, "");
  if(v.length <=2){
    setCardData((prev)=>({...prev,expYear:v}));
  }
  return;
  }
  if(field === "cvc"){
  const v =value.replace(/[^0-9]/g, "");
  if(v.length <=2){
    setCardData((prev)=>({...prev,cvc:v}));
  }
  return;
  }
  setCardData((prev)=>({...prev,[field]:value}));
}
const OnFocusCvc=()=>setFlipped(true)
const  OnBlurCvc=()=>setFlipped(false)

const validateAll=()=>{
const errors={};
const name=(cardData.name|| "").trim();
const number=(cardData.number || "").replace(/\s/g, "");
const expMonth=cardData.expMonth || "";
const expYear=cardData.expYear || "";
const cvc=cardData.cvc || "";

if(!name) errors.name="Cardholder name is required.";
if(!/^\d{16}$/.test(number)){
  errors.number="card number must be 16 digits"
}
const month=parseInt(expMonth,10);
if(!/^\d{1,2}$/.test(expMonth) || month < 1 || month > 12){
  errors.expMonth="invalid month";
}
if(!/^\d{2}$/.test(expYear)){
  errors.expYear="Enter 2-digit year";
}
if(!errors.expYear && !errors.expMonth){
  const now=new Date();
  const  currentYear=parseInt(String(now.getFullYear()).slice(-2),10)
  const currentMonth=now.getMonth()+1;
  const year=parseInt(expYear,10);
  const yearfull=2000+year;
  if(year < currentYear ||(year === currentYear && month < currentMonth) ){
    errors.expMonth="card has expired";
    errors.expYear="card has expired";
  }
  if(year>currentYear +25){
    errors.expYear="Enter a valid year";
  }
}
  if(/^\d{3}$/.test(cvc)){
    errors.cvc="cvc must be 3 digits";
  }
  return errors;
}
const onSubmit=(e)=>{
  if(e && e.preventDefault) e.preventDefault()
  const validate=validateAll()
  setErrors(validate)
  if(object.keys(validate).length === 0){
    alert("Success! Card details are valid.")
  }else{
    if(validate.cvc)setFlipped(true)
      
  }
}


// CARD FORM
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900
    to-blue-900 flex items-center justify-center p-6">
    <div className="w-full max-w-6xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
    {/* left preview card */}
    <CardPreview />
    {/* Right Form */}
    <CardFormFields/>
    </div>
    </div>     
    </div>
  )
}

export default CardForm
