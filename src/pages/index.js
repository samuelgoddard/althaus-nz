import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import Arrow from "../images/arrow.inline.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image";
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

class IndexPage extends React.Component {
  render () {
    return (
      <>
        <SEO
          titleOverride={"Althaus New Zealand"}
          descriptionOverride={"We’re bringing digital skills training to Aotearoa. Unleashing the digital leaders of the future."}
          pathnameOverride={this.props.location.pathname}
        />

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <motion.div variants={fade}>
            <section className="" >
              <div className="absolute top-0 left-0 right-0 z-30">
                <div>
                  <Header color="white" />
                </div>
              </div>
              
              {/* Hero */}
              <div className="bg-purple pt-32 md:pt-48 xl:pt-56 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full z-10 overflow-hidden w-full">
                  <svg className="logo-bg opacity-25 relative block z-10" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.316 31.173l9.259-.004 3.326 5.685h10.283L21.59 0 16.4 8.866l7.972 13.487-9.404.013-6.617 11.235H5.726L15.044 17.7l1.402 2.386h3.827l-5.237-8.892L0 36.858h10.262l6.613-11.24 13.26.013-9.913-16.773 1.368-2.336 15.83 27.025h-2.63L31.445 27.9l-13.295.008-5.199 8.95h16.914l-1.912-3.244h-9.276l1.427-2.436.213-.005z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="42.07" y1="9.562" x2="8.917" y2="40.813" gradientUnits="userSpaceOnUse"><stop stopColor="#D51F3A"/><stop offset="1" stopColor="#2C3583"/></linearGradient></defs></svg>
                </div>
                <div className="container lg:px-32 relative">
                  <div className="flex flex-wrap relative pb-40 md:pb-24">
                    <div className="w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 relative z-20">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 md:mb-8 relative z-10">Unleashing the digital leaders of tomorrow</h1>

                      <div className="w-8/12 md:w-8/12">
                        <div className="text-white text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">
                          <p className="block relative z-10">We’re bringing <strong>digital skills training</strong> to <strong>Aotearoa</strong>.</p>
                        </div>

                        <div className="flex flex-wrap">
                          <AnchorLink to={`#video`} title={"Our Vision Video"} className="block mr-5 relative z-10 btn mb-4 sm:mb-0">
                              <span className="block relative z-20">Our NZ Vision</span>
                              {/* <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span> */}
                          </AnchorLink>

                          <a href="https://althausdigital.co.uk" rel="noopener noreferrer" target="_blank" className="btn btn--pink relative z-10">
                            <span className="block relative z-20">Our UK website</span>
                            {/* <span className="block ml-4 w-8 btn-arrow__arrow"><Arrow /></span> */}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-full max-w-lg lg:max-w-xl xl:max-w-3xl absolute bottom-0 right-0 -mr-24 md:-mr-32 z-10">
                      {/* <GradientRevealLeft>
                      </GradientRevealLeft> */}

                      <Img fluid={ this.props.data.datoCmsHome.heroImage.fluid } className="relative z-10 pb-0 -mb-12" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-purple pt-8 md:pt-12 xl:pt-16" id="video">
              <div className="container lg:px-32">
                <iframe title="Althaus Vision" width="100%" className="video" src="https://www.youtube.com/embed/7yw6XxU1HhE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </section>
            
            <Footer/>
          </motion.div>
        </motion.div>
      </>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    datoCmsHome {
      heroImage {
        fluid(
          imgixParams: {w: "720", fit: "crop", crop: "faces, edges"}) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`