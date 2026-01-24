
import { useState } from "react"
import CardFormFields from "./CardFormFields"
import CardPreview from "./cardpreview"
import { number } from "prop-types"
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
