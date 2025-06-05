import { Header } from "../components";
import Stream from "../components/Stream";

const Home = () => {
  return (
    <div className="w-full relative h-full bg-black min-w-[310px]">\
      <img src="/assets/thumbnails/bluebeetleD.jpg" className="absolute hidden md:block top-0 left-0 w-full object-cover z-0" alt="" />
      <img src="/assets/thumbnails/bluebeetleM.jpg" className="absolute md:hidden  top-0 left-0 w-full object-cover z-0" alt="" />

      <Header />
      <Stream/>
    </div>
  );
}

export default Home;
