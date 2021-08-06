
import './App.css';
import Address from './Components/Profil/Address';
import FullName from './Components/Profil/FullName';
import ProfilePhoto from './Components/Profil/ProfilePhoto';

function App() {
  return (
    <div className='section'>
      <div className="container">
        <FullName />
        <Address />
        <ProfilePhoto />
      </div>



    </div >
  );
}

export default App;
