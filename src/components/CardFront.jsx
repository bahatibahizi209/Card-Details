function CardFront() {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 
    to-pink-500 rounded-2xl p-8 shadow-2xl aspect-[1.586/1] relative overflow-hidden">
    {/* Decorate Light circle */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-24 -mt-24"></div>
    <div className="relative z-10 h-full flex flex-col justify-between">
    {/* Toplogo */}
    <div className="flex justify-between items-start">
    <div className="flex items-center gap-2">
    <div className="w-14 h-11 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg
    flex items-center justify-center">
    <div className="w-10 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
    <div className="w-10 h-10 border-2 border-white rounded-full"></div>
    </div>
    </div>
    </div>
    {/* card number */}
    <div>
      <div className="text-white text-3xl font-mono tracking-widest mb-2">
        0000 0000 0000 0000
      </div>
      </div>
      <div  className="flex justify-between items-end">
      <div>
      <div className="text-white-70 text-xs mb-1 uppercase">Card Holder</div>
      <div className="text-white text-lg font-semibold uppercase">
        JANE APPLESEED
      </div>
    </div>
    <div className="text-right">
    <div className="text-white/70 text-xs mb-1 uppercase tracking-wide">Expires</div>
    <div className="text-white/80 text-xl mb-1 uppercase font-bold">00/00</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CardFront
