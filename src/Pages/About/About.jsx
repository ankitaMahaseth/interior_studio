import AboutSection from "../../components/About/AboutSection";
import Features from "../../components/Features/Features";
import PageHeader from "../../components/Header/PageHeader";
import Team from "../../components/Team/Team";

function About() {
  return (
    <>
      <PageHeader title="About" />
      <AboutSection />
      <Features />
      <Team />
    </>
  );
}

export default About;
