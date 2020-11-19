import React from 'react';
import Layout from './components/Layout';
import AntdComponents from './components/AntdComponents';
import './App.scss';
import 'less';

function App() {
  return (
    <Layout left={<AntdComponents />} right={2} />
  );
}

export default App;
