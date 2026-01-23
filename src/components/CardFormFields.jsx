import { Lock, Shield} from "lucide-react"

function CardFormFields() {
  return (
      // <div className="flex items-baseline justify-between">
      // <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide"></label> 
      // <div className="text-xs text-red-600 ml-2">try again</div>       
      // </div>
      <form className="bg-white rounded-2xl p-10 shadow-2xl">
      <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Payments details</h2>
      <p className="text-gray-600 text-xs">Complete your purchase securely</p>
      </div>
      <div className="space-y-6">
      {/* cardholder name */}
      <div>
          <input type="text"  placeholder="e.g paul george" 
          className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900
          placeholder-gray-400 focus:outline-none transition-all `}/>    
      </div>
      {/* cardholder number */}
      <div>
          <input type="text" inputMode="numeric" placeholder="e.g : 1234-5678-9123-0000" 
          className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900
          placeholder-gray-400 focus:outline-none transition-all `}/>    
      </div>   
      {/* Expiry and CVC */} 
      <div className="flex gap-4"> 
      <div className="flex-1"> 
      <div className="flex gap-2"> 
      <input type="text" inputMode="numeric" placeholder="MM" className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all `}/> 
      <input type="text" inputMode="numeric" placeholder="YY" className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all `}/> 
      <input type="text" inputMode="numeric" placeholder="e.g: 123" className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none transition-all `}/> 
      </div> 
      </div> 
      </div>
      <button type="submit" className="w-full bg-purple-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] mt-4 hover:cursor-pointer">
      Confirm</button> 
      {/* Trust bades */}
      <div className="flex items-center justify-center gap-6 pt-2 text-gray-500 text-xs">
      <div className="flex items-center gap-1.5">
      <Shield size={14}/>
      <span>SSL Secure</span>
      </div>
      <div className="bg-gray-300 w-1 h-1 rounded-full"/>
      <div className="flex items-center gap-1.5">
      <Lock size={14}/>
      <span>PCI Compliant</span>
      </div>
      </div>
      </div> 
      </form>
      ) 
      }
      export default CardFormFields
