import Navbar from "../components/Navbar";
import About from "./#about";
import Tech from "./#tech";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <About />
        <Tech />
      </div>
    </>
  );
}
