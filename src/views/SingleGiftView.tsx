import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { GetSingleGiftRes } from "types";
import { Button } from "@chakra-ui/react";
import "../components/Gifts/Gifts.css";

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);
  const { giftId } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchData(`gift/${giftId}`);
      const data = await res.json();
      setGiftInfo(data);
    })();
  }, []);

  if (!giftInfo) {
    return null;
  }

  return (
    <>
      <h1>{giftInfo.gift.name}</h1>
      <h2>This gift has ID </h2>
      <b>{giftInfo.gift.id}</b>.
      <p>
        {`There is ${
          giftInfo.gift.count - giftInfo.givenCount
        } of those gifts left in stock`}
      </p>
      <Link to="/gift">
        <Button>Go back to list</Button>
      </Link>
    </>
  );
};
