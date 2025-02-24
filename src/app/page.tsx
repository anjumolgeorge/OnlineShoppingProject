import Gents from "@/components/Gents";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
   <main>
    <Hero/>
    <NewProducts/>
    <Testimonials/>
    <Gents/>
   </main>
  );
}
