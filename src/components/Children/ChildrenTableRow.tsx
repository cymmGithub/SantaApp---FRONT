import { Button, Select, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChildEntity, GiftEntity } from "types";
import './Children.css';
import { ChildrenSelectGift } from "./ChildrenSelectGift";


interface Props {
    child: ChildEntity;
    gifts: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {

    return <Tr>
        <Td className="ChildrenTableRow__childName">{props.child.name}</Td>
        <Td>
            <ChildrenSelectGift
                giftsList={props.gifts}
                child={props.child}
                selectedId={props.child.giftId}
            />
        </Td>
    </Tr>







}