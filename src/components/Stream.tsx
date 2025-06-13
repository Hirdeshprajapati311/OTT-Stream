
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlineInfo } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import SectionWrapper from "../hoc/SectionWrapper";
import type { MovieProps } from "../types";

interface StreamProps{
  movies: MovieProps[]
  selectedMovie: MovieProps | null
  setSelectedMovie: (movie: any) => void
}

const Stream = ({ movies, setSelectedMovie, selectedMovie }:StreamProps ) => {
  return (
    <div className="relative w-full">
      <div className='pl-5 z-50 text-white'>
        <div className="flex flex-row justify-between">
          
          <StreamDetails movie={selectedMovie} />
          <span className="pr-20 hidden md:flex border-4 border-primary-dark/5">
            <video src={selectedMovie?.trailer} autoPlay controls muted loop className={` object-cover transition duration-300  max-h-96 max-w-[720px] rounded-lg`}  />
        </span>
        </div>
        
        
        <StreamFrame movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      </div>
    </div>
  );
}

export default SectionWrapper(Stream);


const StreamDetails = ({ movie }: { movie: MovieProps | null}) => {
  if (!movie) return null;


  return (
    <div className="flex flex-col md:justify-center  gap-2 lg:gap-4 relative pt-5 md:pt-0 md:mt-0 lg:mt-8">

      <div className="flex flex-row gap-2 items-center drop-shadow-[2px_2px_0_black]">
        <img className="object-contain w-12 h-12"  src="/assets/logo/Logomark1.png" alt="rweb logo" />
        <div>Hirdesh<span className="font-bold"> Originals</span></div>
      </div>

      <span className="font-extrabold text-3xl  md:text-3xl lg:text-4xl drop-shadow-[2px_2px_0_black] text-white ">{movie.title}</span>

      <div className="flex drop-shadow-[2px_2px_0_black] flex-row gap-3 md:gap-4 pl-1 items-center text-white"><span >{movie.release_year}</span> <span>23Seasons</span> <button className="bg-black border border-white rounded-2xl text-[8px] md:text-[10px] p-1 md:p-2">TV-MA</button></div>

      <div className="flex flex-row gap-2 py-3 md:py-2 lg:py-4 items-center">
        <div className="text-2xl"><PiTelevisionSimpleFill/></div>
        <span className="font-bold drop-shadow-[2px_2px_0_black]">#1 in TV Shows Today</span>
      </div>

      <p className="text-wrap w-[260px] md:text-sm lg:text-base  text-xs md:w-[360px] lg:w-[500px] md:line-clamp-2 line-clamp-3 drop-shadow-[2px_2px_0_black]">{movie.description}</p>

      <div className="flex flex-row gap-6 items-center mt-4">
        <button className="flex flex-row gap-1 p-2 bg-white text-gray-900 justify-center items-center rounded-3xl"><IoMdPlay/>Play</button>
        <button className="flex flex-row gap-1 p-2 bg-white/30 text-white justify-center items-center rounded-3xl drop-shadow-[2px_2px_0_black]"><MdOutlineInfo/> More Info</button>
      </div>


    </div>
  )
}


const StreamFrame = ({ movies, selectedMovie, setSelectedMovie }: StreamProps) => {
  return (
    <div className="py-6 relative">
      <span className="text-white font-bold px-2">Popular Shows</span>
      <div className="mt-4 px-2 flex gap-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <VideoBox key={movie.id} movie={movie} isSelected={selectedMovie?.id === movie.id}
            onSelect={() => setSelectedMovie(movie)}
            
          />
        ))
        }
      </div>
    </div>
  )
}

const VideoBox = ({ movie, isSelected,onSelect }:{movie:MovieProps,isSelected:boolean,onSelect:()=>void}) => {
  return (
    <div className={`relative w-[280px] min-w-[240px] h-[160px] rounded-md overflow-hidden cursor-pointer group  ${isSelected ?"border-2 border-gray-400":""}`} onMouseEnter={onSelect}>
      {
        isSelected ? (
          <video src={movie.trailer} autoPlay muted loop className={`w-full  h-full object-cover transition duration-300  `}  />
        ) : (
            <img
              src={movie.thumbnail_desktop}
              alt={movie.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        )
      }

      {/* Optional dark overlay on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* Optional play icon */}
      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="text-white text-3xl"><IoMdPlay /></div>
        
      </div>
    </div>
  );
};
