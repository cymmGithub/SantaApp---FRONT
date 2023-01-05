import React, { MouseEvent } from "react";
import { GiftEntity } from "types";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";

import './Gifts.css'

interface Props {
    gift: GiftEntity;
    onGiftsChange: () => void;
}

export const GiftTableRow = (props: Props) => {
    const deleteGift = async (e: MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) {
            return;
        }

        const res = await fetchData(`gift/${props.gift.id}`, {
            method: 'DELETE',
        });
        props.onGiftsChange();
    }

    return (
        <tr>
            <td>
                <Link to={`/gift/${props.gift.id}`} className="GiftTableRow__oneElement">
                    {props.gift.name}
                </Link>
            </td>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </td>
        </tr>
    )
}