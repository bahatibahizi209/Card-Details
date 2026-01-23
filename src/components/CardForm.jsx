
import { useState } from "react"
import CardFormFields from "./CardFormFields"
import CardPreview from "./cardpreview"
import { number } from "prop-types"
import formatCardNumber from "../utils/formatcardnumber"
[[]]
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
    if(field === "number"){
      const formated=formatCardNumber(value) 
      if (formated.replace(/\s/g, "").length<=16){
        setCardData((prev)=>({...prev,number:formated}))
      }
      return;
    }
  }

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
