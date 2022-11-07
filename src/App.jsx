import React, { useEffect, useState } from 'react'
import styles from './style'
import { Navbar , Hero , Stats ,Business ,CardDeal ,Testimonials , Clients , CTA ,Footer, Billing } from './components'
import { motion } from 'framer-motion'

const App = () =>  {
  // const [mousePosition , setMousePosition] = useState({
  //   x:0,
  //   y:0
  // });
  // console.log(mousePosition);
  // useEffect(()=>{
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     })

  //   }
  //   window.addEventListener("mousemove" , mouseMove)

  //   return ()=>{
  //     window.removeEventListener("mousemove" , mouseMove)
  //   }
  // },[])
  
  // const variants = {
  //   default: {
  //     x:mousePosition.x - 24,
  //     y:mousePosition.y - 24,
  //   }
  // }
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing/>
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
);
}
export default App
