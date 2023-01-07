import React, { MouseEvent } from "react";
import { GiftEntity } from "types";
import { Link } from "react-router-dom";
import { fetchData } from "../../utils/fetchData";
import { Td, Tr } from "@chakra-ui/react";

import "./Gifts.css";

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
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    props.onGiftsChange();
  };

  return (
    <Tr className="GiftTableRow__oneElement">
      <Td>
        <Link to={`/gift/${props.gift.id}`}>{props.gift.name}</Link>
      </Td>
      <Td>{props.gift.count}</Td>
      <Td>
        <a href="#" onClick={deleteGift} className="ChldrenTableRow__action">
          🗑️
        </a>
      </Td>
    </Tr>
  );
};
