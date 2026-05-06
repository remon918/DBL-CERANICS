import Navbar from "@/components/shared/Navbar";
import TilesPage from "@/components/shared/TilesPage";


const Page = async () => {
  const res = await fetch("https://tiles-galerry-json-server.onrender.com/tiles");
  const tiles = await res.json();

  return <>
  <Navbar />
  <TilesPage tiles={tiles} />
  </>;
};

export default Page;