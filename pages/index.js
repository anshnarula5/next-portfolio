import Navbar from "../components/Navbar";
import About from "./#about";
import Projects from "./#projects";
import Tech from "./#tech";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <About />
        <Tech />
        <Projects />
      </div>
    </>
  );
}
