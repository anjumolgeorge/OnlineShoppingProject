// import Footwears from "@/components/Footwears";
import Gents from "@/components/Gents";
import Hero from "@/components/Hero";
import Ladies from "@/components/Ladies";
import NewProducts from "@/components/NewProducts";
import Perfume from "@/components/Perfume";
import Testimonials from "@/components/Testimonials";
import Watches from "@/components/Collections";

export default function Home() {
  return (
   <main>
    <Hero/>
    <NewProducts/>
    <Testimonials/>
    <Gents/>
    <Ladies/>
    <Perfume/>
    {/* <Footwears/> */}
    <Watches/>
   </main>
  );
}
