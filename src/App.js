 
import './App.css';
import Introduction from './pages/Introduction';
import Project from './pages/Project';
import Technical from './pages/Technical';
import About from './pages/about';
function App() {
  return (
    <div className="max-w-full w-[1400px] h-full m-auto">
       <Introduction/>
  <About/>
 <Project/>
 <Technical/>
    </div>
  );
}

export default App;
