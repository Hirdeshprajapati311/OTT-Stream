import { useState } from "react";
import { Header } from "../components";
import Stream from "../components/Stream";
import { moviesData } from "../constants";
import type { MovieProps } from "../types";

const Home = () => {

  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(moviesData[3]);

  const backgroundImage = selectedMovie?selectedMovie.thumbnail_desktop:""

  return (
    <div className="w-full  h-full bg-black min-w-[310px] absolute top-0 left-0  object-cover z-0" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat"
    }}>
      
      {/* <img src="/assets/thumbnails/bluebeetleM.jpg" className="absolute md:hidden  top-0 left-0 w-full object-cover z-0" alt="" /> */}

      <Header  />
      <Stream movies={moviesData} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
    </div>
  );
}

export default Home;
