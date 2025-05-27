import About from "./_components/About";
import Container from "./_components/Container";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Operation from "./_components/Operation";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Operation />
      <Container>
        <div className="w-full max-w-2xl mx-auto text-center italic text-primary font-thin px-4 py-10 lg:py-24">
          <p>
            At SBT Global, we are passionate about making a tangible difference
            in the world through technology and innovation bridging continents
            and opening doors to endless possibilities
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
