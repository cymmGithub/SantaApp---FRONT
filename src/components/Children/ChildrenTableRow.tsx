import { Td, Tr } from "@chakra-ui/react";
import React, { MouseEvent } from "react";
import { fetchData } from "../../utils/fetchData";
import { ChildEntity, GiftEntity } from "types";
import { ChildrenSelectGift } from "./ChildrenSelectGift";

import "./Children.css";

interface Props {
  child: ChildEntity;
  gifts: GiftEntity[];
  onChildsChange: () => void;
}

export const ChildrenTableRow = (props: Props) => {
  const deleteChild = async (e: MouseEvent) => {
    e.preventDefault();

    if (
      !window.confirm(`Are you sure you want to remove ${props.child.name}`)
    ) {
      return;
    }

    const res = await fetchData(`child/${props.child.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.onChildsChange();
  };
  return (
    <Tr>
      <Td className="ChildrenTableRow__childName">{props.child.name}</Td>
      <Td className="ChildrenSelectGift__style">
        <ChildrenSelectGift
          giftsList={props.gifts}
          child={props.child}
          selectedId={props.child.giftId}
        />
      </Td>
      <Td className="ChldrenTableRow__action">
        <a href="#" onClick={deleteChild}>
          🗑️
        </a>
      </Td>
    </Tr>
  );
};
