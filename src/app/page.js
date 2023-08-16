import About from "@/components/About/About";
import AboutCard from "@/components/AboutCard/AboutCard";
import Hero from "@/components/Hero/Hero";
import BlogSlider from "@/components/Slider/BlogSlider";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <AboutCard />
      {/* <BlogSlider /> */}
    </Layout>
  );
}
