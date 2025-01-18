import Header from "./components/header/Header";
import SubHeader from "./components/subheader/SubHeader";
import SideBar from "./components/sidebar/Sidebar";
import MainContent from "./components/maincontent/Maincontent";
import "./App.css";
function App() {
 

  return (
    <div className="app-container">
    {/* Fixed Sidebar */}
    <SideBar />

    {/* Main Content with fixed headers */}
    <div className="content-container">
      <div className="header"><Header/></div>
      <div className="subheader"><SubHeader/></div>
      <MainContent />
    </div>
  </div>
  );
}

export default App;