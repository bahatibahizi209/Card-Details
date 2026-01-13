function CardBack() {
  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-800 
    to-gray-900 rounded-2xl shadow-2xl aspect-[1.586/1] overflow-hidden">

     {/* magnetic stripe */}
     <div className="bg-black h-14 w-full mt-8"></div>
     {/* cv panel */}
     <div className="px-8 mt-8">
    <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-end shadow-inner">
    <span className="text-gray-800 font-mono text-2xl font-bold tracking-widest">000</span>
    </div>
     </div>
    </div>
  )
}

export default CardBack
