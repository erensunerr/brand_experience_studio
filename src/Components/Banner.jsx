import { motion } from 'framer-motion'

import './banner.css'
import Image from './Image'
import {images} from './Loader'

// variants

const Banner = () => {

  return (
    <motion.section
      className="container mx-auto mt-24 space-y-8 p-6"
    >
      <motion.div
        className="flex items-center justify-between"

      >
        <h2 className="text-8xl font-semibold">brand</h2>

        <motion.p className="w-64 text-sm font-semibold mr-[25%]">
          We are specialised in constructing the foundations of your brand and
          setting you up for success.
        </motion.p>

      </motion.div>
      <h2 className="text-8xl font-semibold animate-[marquee_5s_infinite_linear]">experience</h2>
      <h2 className="text-8xl font-semibold translate-x-[50%]">studio</h2>
      <div className="flex">
        <p className="rounded-full inline-flex items-center ml-[10%] p-4 w-24 h-24 text-center bg-neutral-900 text-neutral-100 font-semibold">scroll down</p>
      </div>
      <motion.div
        className="relative px-6 top-[-72px] z-[-10]"
        layoutId="image-main-1"
      >
        <Image {...images[1]} />

      </motion.div>
    </motion.section>
  )
}

export default Banner
