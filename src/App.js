import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
function App({githubUserName}) {
  return (
    <div>
    <Navbar />
    <Body githubUserName={githubUserName} />
   </div>
 
  );
}

export default App;
