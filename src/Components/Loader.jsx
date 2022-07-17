import Image from './Image'

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

const Loader = () => {
  console.log(images)
  return (
    <section className="fixed h-full container mx-auto w-full inset-0">

      <div className="absolute w-[160px] sm:w-[30%] left-[16%] bottom-[20%] md:bottom-[5%] z-50">
        <Image src={images[0].src}/>
      </div>

      <div className="absolute max-w-[80%] w-[250px] left-[10%] top-[35%] sm:w-[30%] sm:left-[35%] top-[27%] z-20">
        <Image src={images[1].src}/>
      </div>

      <div className="absolute w-[100px] sm:w-[30%] right-[12%] top-[8%]">
        <Image src={images[2].src}/>
      </div>

      <div className="absolute w-[40%] right-[10%] bottom-[5%]">
        <Image src={images[3].src}/>
      </div>

      <div className="absolute w-[20%] left-[14%] top-[12%]">
        <Image src={images[4].src}/>
      </div>


    </section>
  )
}

export default Loader
