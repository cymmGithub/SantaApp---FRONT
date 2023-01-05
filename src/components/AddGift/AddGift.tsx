import { Button, propNames } from "@chakra-ui/react";
import { valueToPercent } from "@mui/base";
import React, { FormEvent, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { CreateGiftReq, GiftEntity } from "types";


interface Props {
    onGiftsChange: () => void;
}

export const AddGift = (props: Props) => {

    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 0,

    });
    const [loading, setLoading] = useState<boolean>(false);
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }
    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetchData(`gift`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });


        if (res.status === 200) {
            props.onGiftsChange();
            return;
        }

        setLoading(false);

    }


    return <form onSubmit={sendForm}>
        <h2>Add Gift</h2>
        <input
            type="text" placeholder="Add Gift"
            value={form.name}
            onChange={e => updateForm('name', e.target.value)} />

        <input
            type="number"
            value={form.count}
            onChange={e => updateForm('count', Number(e.target.value))}
        />


        <Button isLoading={loading} size='md' type="submit">+</Button>
    </form>

}