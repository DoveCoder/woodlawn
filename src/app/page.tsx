import HomeHero from "@/app/components/Hero/HomeHero";
import ClassHero from "@/app/components/Hero/ClassHero";

export default function Home() {
  return (
    <main>
      <section id="home">
        <HomeHero/>
      </section>

      <section id="classes" className="container mx-auto">
        <ClassHero reverse={false}/>
        <ClassHero reverse={true}/>
        <ClassHero reverse={false}/>
      </section>
    </main>
  );
}
