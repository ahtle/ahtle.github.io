import SectionOne from "./section-one";
import SectionTwo from "./section-two";

export default function Home() {
  return (
    <div id="home" className="bg-black">
      <main>
        {/* hero banner */}
        <SectionOne />

        <SectionTwo />
      </main>
    </div>
  );
}
