import React from 'react';
import './App.css';
import { GiftsView } from './views/GiftsView';
import { Route, Routes } from 'react-router-dom';
import { ChildrenView, } from './views/ChildrenView';
import { Header } from './components/Header/Header';
import { SingleGiftView } from './views/SingleGiftView';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:giftId" element={<SingleGiftView />} />
        <Route path="/child" element={<ChildrenView />} />
        <Route path="/" element={<ChildrenView />} />
      </Routes>
    </>

  );
}

