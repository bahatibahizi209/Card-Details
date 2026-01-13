import CardFront from "./CardFront"

function CardPreview() {
 return (
    <div className="space-y-8">
    <div className="relative perspective-1000" style={{minHeight:"280px"}}>
    <div className={`absolute inset-0 transition-all duration-700`}>
    <CardFront/>
    </div>
    </div>
    </div>
  )
}

export default CardPreview
