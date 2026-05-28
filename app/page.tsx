import SectionOne from "./_components/sections/section-one";
import SectionTwo from "./_components/sections/section-two";
import SecionThree from "./_components/sections/section-three";

export default function Home() {
  return (
    <div id="home" className="bg-black">
      <main>
        {/* hero banner */}
        <SectionOne />

        <SectionTwo />
        <SecionThree />
      </main>
    </div>
  );
}
