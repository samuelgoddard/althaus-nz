import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const transition = { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] }

const fade = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: {
		opacity: 0,
		transition: { duration: 0.5, ...transition }
	}
}

class ErrorPage extends React.Component {
  render () {
    return (
      <>
        <SEO titleOverride="Page Not Found" />
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <section>
              <div className="absolute top-0 left-0 right-0 z-30">
                <div>
                  <Header color="white" />
                </div>
              </div>
            
              <div className="overflow-hidden">
                <div className="bg-purple pt-32 pb-24 md:pt-48 md:pb-24 relative">
                  <div className="container lg:px-32 relative">
                    <span className="uppercase font-semibold text-white text-xl md:text-2xl block mb-3">404 Error</span>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium text-pink mb-6 md:mb-8">Page Not Found</h1>

                    <p className="text-white text-lg w-8/12 md:w-1/2">Unfortunately, that page does not exist. Navigate back to our <Link to="/" className="underline">home page</Link>.</p>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </motion.div>
        </motion.div>
      </>
    )
  }
}

export default ErrorPage