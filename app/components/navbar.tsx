import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="w-full text-white flex flex-col items-center gap-12 md:items-start">
            <Image
        src="/icon.svg"
        alt="Picture of the author"
        width={50}
        height={50}
      />
      <div className='flex flex-col items-center md:items-start gap-3'>
      <span className="text-6xl font-bold">PelisUp!</span><span className="font-bold text-sm md:text-base">Plataforma para ver peliculas y series ☝️🤓</span></div>
      </div>
  )
}
