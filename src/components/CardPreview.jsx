import CardFront from "./CardFront"

function CardPreview() {
 return (
    <div className="space-y-8">
    <div className={`absolute inset-0 transition-all duration-700`}>
    <CardFront/>
    </div>
    </div>
  )
}

export default CardPreview
