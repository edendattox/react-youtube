import './App.css';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos"
import Header from "./Header"

function App() {
  return (
    <div className="app">
      <Header/> 
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos />
      </div>
  </div>
  );
}

export default App;






// components 
// {Header}
// {Sidebar}
// {RecommendedVideos}