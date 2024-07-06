import { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import AOS from "aos";
import $ from "jquery";
import "aos/dist/aos.css";
import "./index.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import FirstSection from "./Components/FirstSection/firstSection";
import AboutMeSection from "./Components/aboutMeSection/aboutMeSection";
import MainAbilities from "./Components/mainAbilities/mainAbilities";
import ProjectsSection from "./Components/ProjectsSection/projectSection";
import ContactSection from "./Components/Contact/Contact";

AOS.init();

const anchors = ["Home", "AboutMe", "Abilities", "Projects", "ContactMe"];

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const fullpageApiRef = useRef(null);

  const handleAfterLoad = (origin, destination) => {
    setActiveSection(destination.index);
    $(".fp-table.active .aos-init").addClass("aos-animate");
  };

  const handleNavClick = (index) => {
    fullpageApiRef.current.moveTo(index + 1);
  };

  useEffect(() => {
    const navItems = document.querySelectorAll("#my-nav li");

    navItems.forEach((item, index) => {
      if (index === activeSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [activeSection]);

  return (
    <div>
      <Header />
      <Navbar activeSection={activeSection} handleNavClick={handleNavClick} />
      <ReactFullpage
        anchors={anchors}
        navigation={false}
        navigationTooltips={anchors}
        onSlideLeave={handleAfterLoad}
        afterSlideLoad={handleAfterLoad}
        afterLoad={handleAfterLoad}
        lazyLoading={true}
        sectionsColor={["#dbdbda", "#1d1d1d", "#dbdbda", "#1d1d1d", "#dbdbda"]}
        render={({ fullpageApi }) => {
          fullpageApiRef.current = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              <div>
                <FirstSection />
                <AboutMeSection />
                <MainAbilities />
                <ProjectsSection />
                <ContactSection />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
