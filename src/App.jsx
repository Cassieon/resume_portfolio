import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home'
import ResumeViewer from './pages/resume'
import Projects from './pages/projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<ResumeViewer/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <div> 
        {/* <h1>Hello</h1> */}
    </div>

    </Router>
    
  );
}

export default App;
