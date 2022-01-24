import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignUp from './features/Signup';
import Home from './features/Home';

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;