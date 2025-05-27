import Container from "./Container";

function About() {
  return (
    <Container>
      <section
        id="about"
        className="w-full max-w-2xl mx-auto px-4 py-10 md:py-24 space-y-2"
      >
        <h2 className="text-primary text-center text-xl md:text-2xl font-bold uppercase">
          About Us
        </h2>
        <p className="text-justify md:text-center text-sm sm:text-lg text-primary">
          SBT Global, headquartered in Texas, represents a dynamic nexus of
          technology and global commerce . As a multifaceted organization, we
          are at the vanguard of connecting markets, empowering individuals, and
          fostering economic development worldwide .
        </p>
      </section>
    </Container>
  );
}

export default About;
