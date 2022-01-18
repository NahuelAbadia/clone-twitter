import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from "./components/Layout";
import Feed from './components/pages/Feed';
import Messages from './components/pages/Messages'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path='/home' element={<Feed />} />
        <Route exact path='/messages' element={<Messages />} />
        <Route exact path='/' element={<Feed />} />
      </Routes>
    </Layout>
  );
};

export default App;