import Image from 'next/image'
import squirtle from '../../../../public/pokemon/Squirtle.webp'

const page = () => {
  return (
    <div>
      <Image 
      src={squirtle}
      alt='a picture of Squirtle'
      priority
      />
    </div>
  )
}

export default page