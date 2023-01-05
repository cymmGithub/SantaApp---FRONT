import React, { useEffect, useState } from "react";
import { GiftEntity } from "types";
import { GiftsTable } from "./GiftsTable";
import './Gifts.css';


interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

export const GiftsList = (props: Props) => {


    return <>
        <h1 className="GiftsList__title">Gifts</h1>
        <GiftsTable gifts={props.gifts} onGiftsChange={props.onGiftsChange}></GiftsTable>

    </>

}