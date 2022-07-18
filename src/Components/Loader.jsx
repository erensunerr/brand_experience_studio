import {useEffect} from 'react';
import { motion } from 'framer-motion';

import Image from './Image';

const imageInfo = [
  {
    id: 1,

  },
  {
    id: 2,

  },
  {
    id: 3,

  },
  {
    id: 4,

  },
  {
    id: 5,

  },
]
export const images = imageInfo.map(({id, ...others}) =>
  ({
    src: require(`../Assets/image-${id}.webp`),
    fallback: require(`../Assets/image-${id}.jpg`),
    id: id,
    ...others
  })
)

// variants

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, -.01, -.05, .95],
      duration: 1.6,
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: .8,
    }
  }

}

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, -.01, -.05, .95],
      duration: 1.6,
    }
  }
}

const Loader = ({setLoading}) => {
  return (
    <motion.section
      className="fixed h-full container mx-auto w-full inset-0"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={
        () => setLoading(false)
      }
    >

      <ImageBlock
        className="absolute w-[160px] sm:w-[30%] left-[16%] bottom-[20%] md:bottom-[5%] z-50"
        img={images[0]}
      />

      <motion.div
        className="absolute max-w-[80%] w-[250px] left-[10%] top-[35%] sm:w-[30%] sm:left-[35%] top-[27%] z-20"
        variants={itemMain}
        layoutId="image-main-1"
        transition={
          {
            ease: [0.6, 0.01, -0.05, .9],
            duration: 1.6
          }
        }
        >
        <Image src={images[1].src}/>
      </motion.div>

      <ImageBlock
        className="absolute w-[100px] sm:w-[30%] right-[12%] top-[8%]"
        img={images[2]}
      />
      <ImageBlock
        className="absolute w-[40%] right-[10%] bottom-[5%]"
        img={images[3]}
      />
      <ImageBlock
        className="absolute w-[20%] left-[14%] top-[12%]"
        img={images[4]}
      />

    </motion.section>
  )
}

export const ImageBlock = ({img, ...others}) => (
  <motion.div
    variants={item}
    animate={{
      scale: .5,
      transition: {
        duration: 1,
      }
    }
    }
    {...others}
  >
    <Image {...img}/>
  </motion.div>
)

export default Loader
