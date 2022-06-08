import "./App.css";
import Profile from "./Profiles/Profile/Profile"
import User from "../src/dhia.jpg"
import ProfilePhoto from "./Profiles/ProfilePhoto/ProfilePhoto";


function App() {
  const handleName = (name) => alert(name);
  return (
    <div className="App">
      
      
      <div className="body">
      <ProfilePhoto>
         <img src={User} className="img1"/>
      </ProfilePhoto>
      <Profile
        
          fullName={"dhia bachtouli"}
          profession={"Full Stack Developer"}
          bio="checkpoint props"
          handleName={handleName}
        >
        </Profile>
      </div>

        
      
    </div>
  );
}


export default App;