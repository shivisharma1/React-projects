import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element= {<Home/>} />
            <Route path="/create" element= { <Create/> } />
            <Route path="/blogs/:id" element= { <BlogDetails/> } />
            <Route element= { <NotFound/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
