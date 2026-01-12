function CardFront() {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 
    to-pink-500 rounded-2xl p-8 shadow-2xl aspect-[1.586/1] relative overflow-hidden">
    {/* Decorate Light circle */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-24 -mt-24"></div>
    </div>
  )
}

export default CardFront
