import SectionFive from "@/app/_components/sections/section-five";
import SectionFour from "@/app/_components/sections/section-four";
import SectionOne from "@/app/_components/sections/section-one";
import SectionThree from "@/app/_components/sections/section-three";
import SectionTwo from "@/app/_components/sections/section-two";

export default function Home() {
  return (
    <div id="home" className="bg-black">
      <main>
        {/* hero banner */}
        <SectionOne />

        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
    </div>
  );
}
