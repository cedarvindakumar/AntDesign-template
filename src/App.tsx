import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menus from './Component/Menu/Menus';
import { Layout } from 'antd';
import Pannel from './Component/Pannel';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Pannel/Dashboard/Dashboard';
import ProductList from './Component/Pannel/ProductList/ProductList';
import Help from './Component/Pannel/Help/Help';
import Faq from './Component/Pannel/Faq/Faq';

function App() {
  return (
    <div className="App">

      <Pannel />
      
    </div>
    
  );
}

export default App;
