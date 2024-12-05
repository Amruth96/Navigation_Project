// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;









import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './nav/Home';   
import About from './nav/About'; 
import Footer from './nav/Footer'; 
import Navigation from './nav/navigation';
import NavigateHome from './nav/navigate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation/>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <NavigateHome/>
    </BrowserRouter>
  );
}
export default App;








// import Counter from "./UseReducer/Counter";

 
// import React from 'react'
 
//  function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }
// export default App;