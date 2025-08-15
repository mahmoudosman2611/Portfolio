
import AboutMe from "../../Components/AboutMe/AboutMe";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

export default function Home() {
  return (
    <>
      <PageMetaData
        title="Mahmoud Osman -Frontend Developer"
        description="Discover fresh deals and best-selling products on FreshCart – your ultimate online grocery destination."
        keywords="FreshCart, grocery, deals, fresh food, online shopping, offers"
        author="Mahmoud Osman"
      />
      <Portfolio />
      <AboutMe/>
      <Skills/>
      <Projects/>

    </>
  );
}
