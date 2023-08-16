import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import BlogSlider from "@/components/Slider/BlogSlider";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      {/* <BlogSlider /> */}
    </Layout>
  );
}
