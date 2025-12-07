import LeftImage   from '../../src/assets/profile1.jpg'
import RightImage  from '../../src/assets/profile2.jpg'
function CtaSection() {
  return (
     <div className="py-20 lg:py-20 bg-light-neutral-300/50 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-4xl font-semibold text-primary mb-5">Ready to cook smarter?</h2>

      <p className="text-xl lg:text-2xl text-primary max-w-3xl mb-5 mx-auto leading-relaxed">
        {""}
        Hit the button, pick recipe, and get dinner on the table-fast.
      </p>
      <button className="bg-primary text-white px-10 py-5 rounded-2xl text-xl
      font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl
      hover:shadow-2xl
      ">
    Browse recipes</button>
    </div>
    </div>
  )
}

export default CtaSection
