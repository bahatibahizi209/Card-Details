import CardBack from "./CardBack"
import CardFront from "./CardFront"

function CardPreview({cardData,flipped}) {
 return (
    <div className="space-y-8">
    <div className="relative perspective-1000" style={{minHeight:"280px"}}>
    <div className={`absolute inset-0 transition-all duration-700 ${
    flipped ? "opacity-0 pointer-events-none":"opacity-100"}`}
    style={{transform: flipped ? "rotateY(180deg)":"rotateY(0deg)",
    transformStyle:"preserve-3d", backfaceVisibility:"hidden"
    }}  >
    <CardFront cardData={cardData}/>
    </div>
    <div className={`absolute inset-0 transition-all duration-300 
    ${flipped ? "opacity-0 pointer-events-none":"opacity-100"}`}
     style={{transform: flipped ? "rotateY(180deg)":"rotateY(0deg)",
    transformStyle:"preserve-3d", backfaceVisibility:"hidden"
    }}  >
    <CardBack/>
    </div>
    </div>
    
    </div>
  )
}

export default CardPreview
