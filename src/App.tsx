import React from 'react';
import './App.css';
import { GiftsView } from './views/GiftsView';
import { Route, Routes } from 'react-router-dom';
import { ChildrenView, } from './views/ChildrenView';
import { Header } from './components/Header/Header';
import { SingleGiftView } from './views/SingleGiftView';

export const App = () => {
  return (
    <div className='App__container'>
      <img className='Santa_img' src="https://i.imgur.com/6J1DpOn.png" alt="" />
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:giftId" element={<SingleGiftView />} />
        <Route path="/child" element={<ChildrenView />} />
        <Route path="/" element={<ChildrenView />} />
      </Routes>
    </div>

  );
}

