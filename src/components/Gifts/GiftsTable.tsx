import { GiftEntity } from "types";
import { GiftTableRow } from "./GiftTableRow";

import "./Gifts.css";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

interface Props {
  gifts: GiftEntity[];
  onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => {
  return (
    <>
      <Table className="GiftsTable__table">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Count</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.gifts.map((gift) => (
            <GiftTableRow
              gift={gift}
              key={gift.id}
              onGiftsChange={props.onGiftsChange}
            />
          ))}
        </Tbody>
      </Table>
    </>
  );
};
