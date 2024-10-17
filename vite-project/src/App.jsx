import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import img1 from './assets/loading.gif'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div className='mx-auto'><img src={img1} alt="" /></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
