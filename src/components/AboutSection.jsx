import image   from '../../src/assets/herobanner6.jpg'
function AboutSection() {
  return (
    <div className="py-10 bg-light-neutral-100 from-teal-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-4xl lg:text-6xl font-semibold text-primary mb-8">Built for real life</h2>
            <p className="space-y-6 text-lg lg:text-xl text-secondary leading-relaxed">{""}
            Cooking shouldn't be complicated. These recipes come in under{""}
            <span className="text-primary font-semibold"> 30 minutes </span>
            of active time, fit busy schedules, and taste good enough to repeat.
            <p>
            {""}
            whether you're new to the kitchen or just need fresh ideas,
            we've
            got you covered.
            </p>
            </p>
        </div>
         <div className="relative">
        <img src={image} alt="" className="relative w-100 h-auto rounded-3xl shadow-2xl transform
        hover:scale-105 transition-all duration-500 cursor-pointer"/>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default AboutSection
