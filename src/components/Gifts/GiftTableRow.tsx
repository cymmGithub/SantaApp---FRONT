import React, { MouseEvent } from "react";
import { GiftEntity } from "types";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";

import './Gifts.css'
import { Td, Tr } from "@chakra-ui/react";

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
            headers: {
                'Content-Type': 'application/json',
            }
        });


        props.onGiftsChange();
    }

    return (
        <Tr>
            <Td>
                <Link to={`/gift/${props.gift.id}`} className="GiftTableRow__oneElement">
                    {props.gift.name}
                </Link>
            </Td>
            <Td>{props.gift.count}</Td>
            <Td>
                <a href="#" onClick={deleteGift}>🗑️</a>
            </Td>
        </Tr>
    )
}