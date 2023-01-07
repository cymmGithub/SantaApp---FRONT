import React, { useEffect, useState } from "react";
import { GiftEntity } from "types";
import { AddGift } from "../components/AddGift/AddGift";
import { GiftsList } from "../components/Gifts/GiftsList";
import { fetchData } from "../utils/fetchData";
import "../App.css";

export const GiftsView = () => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  const refreshGifts = async () => {
    setGiftsList(null);
    (async () => {
      const res = await fetchData(`gift`);
      const data = await res.json();
      setGiftsList(data.giftList);
    })();
  };
  useEffect(() => {
    refreshGifts();
  }, []);

  if (!giftsList) {
    return (
      <div className="container">
        <div className="load-container">
          <div className="linespinner"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <GiftsList gifts={giftsList} onGiftsChange={refreshGifts} />
      <AddGift onGiftsChange={refreshGifts} />
    </div>
  );
};
