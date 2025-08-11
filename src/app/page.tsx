import Category from "@/components/Category";
import Gallery from "@/components/Gallery";

import Hero from "@/components/Hero";
import OurProducts from "@/components/OurProduct";
import SectionWrapper from "@/components/RoomInspiration/inde";

export default function Home() {
  return (
    <main className="">
      <Hero
        title="Discover Our New Collection"
        subtitle="New Arrival"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        buttonLabel="Buy Now"
      />
      <Category/>
      <OurProducts/>
      <SectionWrapper/>
      <Gallery/>
      
    </main>


  );
}
