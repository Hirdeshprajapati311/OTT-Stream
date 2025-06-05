
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlineInfo } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

const Stream = () => {
  return (
    <div className="relative">
      <div className='pl-5 z-50 text-white'>
        <StreamDetails />
        <StreamFrame />
      </div>
    </div>
  );
}

export default Stream;


const StreamDetails = () => {
  return (
    <div className="flex flex-col md:justify-center gap-4 relative mt-10">

      <div className="flex flex-row gap-2 items-center">
        <img className="object-contain w-12 h-12"  src="/assets/logo/Logomark1.png" alt="rweb logo" />
        <div>Hirdesh<span className="font-bold"> Originals</span></div>
      </div>

      <span className="font-extrabold text-6xl text-white">Blue Beetle</span>

      <div className="flex flex-row gap-4 pl-1 items-center text-white"><span >2024</span> <span>23Seasons</span> <button className="bg-black border border-white rounded-2xl text-[10px] p-2">TV-MA</button></div>

      <div className="flex flex-row gap-2 py-4 items-center">
        <div className="text-2xl"><PiTelevisionSimpleFill/></div>
        <span className="font-bold">#1 in TV Shows Today</span>
      </div>

      <p className="text-wrap w-[500px] line-clamp-3">An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that's capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle. </p>

      <div className="flex flex-row gap-6 items-center mt-4">
        <button className="flex flex-row gap-1 p-2 bg-white text-gray-900 justify-center items-center rounded-3xl"><IoMdPlay/>Play</button>
        <button className="flex flex-row gap-1 p-2 bg-white/30 text-white justify-center items-center rounded-3xl"><MdOutlineInfo/> More Info</button>
      </div>


    </div>
  )
}


const StreamFrame = () => {
  return (
    <div className="py-6 relative">
      <span className="text-white font-bold px-2">Popular Shows</span>
      <div className="mt-4 px-2 flex gap-4 overflow-x-auto">
        <VideoBox
          thumbnail="/assets/thumbnails/bluebeetleD.jpg"
          title="Blue Beetle"
        />
        <VideoBox
          thumbnail="/assets/thumbnails/duneD.jpg"
          title="Galactic 99"
        />
        <VideoBox
          thumbnail="/assets/thumbnails/gaurdiansofgalaxyD.jpg"
          title="Galactic 99"
        />
        <VideoBox
          thumbnail="/assets/thumbnails/godzillaxkongD.png"
          title="Galactic 99"
        />
        <VideoBox
          thumbnail="/assets/thumbnails/flashD.png"
          title="Galactic 99"
        />
        <VideoBox
          thumbnail="/assets/thumbnails/pastlivesD.jpg"
          title="Galactic 99"
        />
        {/* Add more VideoBox components as needed */}
      </div>
    </div>
  )
}

const VideoBox = ({ thumbnail, title }:{thumbnail:string,title:string}) => {
  return (
    <div className="relative w-[280px] h-[160px] rounded-md overflow-hidden cursor-pointer group">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
      />

      {/* Optional dark overlay on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Optional play icon */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-white text-3xl"><IoMdPlay /></div>
        
      </div>
    </div>
  );
};
