import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

AOS.init();

import FirstSection from "./Components/FirstSection/firstSection";
import MainAbilities from "./Components/mainAbilities/mainAbilities";
import AboutMeSection from "./Components/aboutMeSection/aboutMeSection";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const handleAfterLoad = () => {
  $(".fp-table.active .aos-init").addClass("aos-animate");
};

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    onSlideLeave={handleAfterLoad}
    afterSlideLoad={handleAfterLoad}
    afterLoad={handleAfterLoad}
    sectionsColor={["#dbdbda", "#1d1d1d", "#2E2E2E"]}
    // SALVAR ESSA COR: 23311e
    onLeave={(origin, destination, direction) => {
      handleAfterLoad;
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <FirstSection />
          <AboutMeSection />
          <MainAbilities />
        </div>
      );
    }}
  />
);
export default App;
