import { Button, Select } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { ChildEntity, GiftEntity, SetGiftForChildReq } from "types";


interface Props {
    giftsList: GiftEntity[];
    child: ChildEntity;
    selectedId: string;
}

export const ChildrenSelectGift = (props: Props) => {
    const [selected, setSelected] = useState<string>(props.selectedId ?? '');

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        const res = fetchData(`child/gift/${props.child.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                giftId: selected,
            } as SetGiftForChildReq)
        })
    }
    return (
        < form onSubmit={sendForm}>
            < label className="ChildrenList__style" >
                <Select value={selected} placeholder='Select Gift' size='xs' onChange={e => setSelected(e.target.value)}>
                    {
                        props.giftsList.map(gift => <option key={gift.id} value={gift.id}>{gift.name}</option>)
                    }
                </Select>
                <Button type="submit" size='xs'>Save</Button>
            </label >
        </form >
    )
}