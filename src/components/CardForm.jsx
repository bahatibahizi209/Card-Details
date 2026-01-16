import CardFormFields from "./CardFormFields"
import CardPreview from "./cardpreview"
function CardForm() {
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
