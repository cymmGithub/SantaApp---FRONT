import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { ChildEntity, GiftEntity } from "types";
import { ChildrenTableRow } from "./ChildrenTableRow";

interface Props {

    childrenList: ChildEntity[];
    giftList: GiftEntity[];
}
export const ChildrenTableGift = (props: Props) => {

    return <div className="ChildrenTableGift__container">
        <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>Child</Th>
                    <Th>Gift</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    props.childrenList.map(child => <ChildrenTableRow key={child.id} child={child} gifts={props.giftList} />)
                }
            </Tbody>
        </Table>
    </div>




}