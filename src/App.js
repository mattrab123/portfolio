import './css/App.css';
import Banner from './banner';
import Skills from './skills';
import Home from './home';
import Connect from './connect';
import { useState } from 'react';

const App = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showConnect, setShowConnect] = useState(false);

  const navigateToHomePage = () => {
      console.log("clciked");
      setShowSkills(false);
      setShowConnect(false);
  };

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };
  const toggleConnect = () => {
    setShowConnect(!showConnect);
};

  return (
    <div className="App">
      {/* here we want to be returning our components to load onto the page */}
      <Banner navigate={navigateToHomePage}>
        <h1 className={"bannerHeader"}>Matthew Watkeys</h1>
        <h3 className={"bannerHeader3"}>_________</h3>
        <h4>Software Engineer</h4>
      </Banner>
      {showSkills ? (<Skills />) : showConnect ? (<Connect />) : (<Home toggleSkills={toggleSkills} toggleConnect={toggleConnect} />)}
    </div>
  );
};

export default App;
