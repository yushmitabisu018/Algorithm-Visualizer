import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Pathfinder from './pathfinderComponents/pathfinder';
import Home from './homeComponents/home';
import Seive from './primeComponents/seive';
import Sort from './sortComponents/sort';
import BinarySearch from './binarySearchComponent/binarySearch';
import RecursiveSort from './recursiveSortComponents/recursiveSort';
import Graph from './Graph/graph';
import About from './homeComponents/AboutModal'; 

const theme = createTheme({
  // You can customize your theme here if needed
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/pathfinder" element={<Pathfinder />} />
          <Route path="/sort" element={<Sort />} />
           <Route path="/recursivesort" element={<RecursiveSort />} />
           <Route path="/graph" element={<Graph />} />
           <Route path="/binarysearch" element={<BinarySearch />} />
          <Route path="/prime" element={<Seive />} />
           <Route path="/AboutModal" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
