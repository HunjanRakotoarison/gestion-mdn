import Slides from "@/ui/components/Slides/Slides";
import Hero from "@/ui/components/Hero/Hero";
import Membres from "@/ui/components/Membres/Membres";
import Benevolat from "@/ui/components/Benevolat/Benevolat";
import Activites from "@/ui/components/Activites/Activites";
import Partenariats from "@/ui/components/Partenariats/Partenariats";
import ContactAnimations from "@/ui/components/Contact/ContactAnimations";

export default function Home() {
  return (
    <>
      <Slides />
      <Hero />
      <Membres />
      <Benevolat />
      <Activites />
      <Partenariats />
      <ContactAnimations />
    </>
  );
}
