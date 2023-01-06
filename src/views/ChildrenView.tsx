import React, { useEffect, useState } from "react"
import { GetAllChildRes } from "types";

import { fetchData } from "../utils/fetchData";
import { ChildrenTableGift } from "../components/Children/ChildrenTableGift";
import { AddChild } from "../components/AddChild/AddChild";

export const ChildrenView = () => {

    const [data, setData] = useState<GetAllChildRes | null>(null);

    const refreshChilds = async () => {
        setData(null);
        (async () => {
            const res = await fetchData(`child`);
            const data = await res.json();
            setData(data);
        })();
    }
    useEffect(() => {
        refreshChilds();

    }, []);

    if (!data) {
        return <div className="container">
            <div className="load-container">
                <div className="linespinner"></div>
            </div>
        </div>
    }
    return <>

        <ChildrenTableGift onChildsChange={refreshChilds} childrenList={data.childrenList} giftList={data.giftList} />
        <AddChild onChildsChange={refreshChilds} />
    </>

}


