import { GiftEntity } from "types";
import { GiftTableRow } from "./GiftTableRow";

import './Gifts.css'

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => {

    return <>
        <table className="GiftsTable__table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.gifts.map(gift => (
                        <GiftTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange} />
                    ))
                }
            </tbody>
        </table>
    </>
}




