import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'


function App() {
  return (
    <div className="App">
      <ParticlesBg className='particles' num={100} type="cobweb" bg={true}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
