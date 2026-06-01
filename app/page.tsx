import ContactsWidget from "@/app/_components/contacts/contacts-widget";
import SectionFive from "@/app/_components/sections/section-five";
import SectionFour from "@/app/_components/sections/section-four";
import SectionOne from "@/app/_components/sections/section-one";
import SectionThree from "@/app/_components/sections/section-three";
import SectionTwo from "@/app/_components/sections/section-two";
import SectionSix from "@/app/_components/sections/section-six";

export default function Home() {
  return (
    <div id="home" className="bg-black">
      <ContactsWidget />
      <main>
        {/* hero banner */}
        <SectionOne />

        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
    </div>
  );
}
