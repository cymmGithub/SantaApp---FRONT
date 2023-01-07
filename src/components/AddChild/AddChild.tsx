import { Button } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { CreateChildReq } from "types";

import "../../App.css";

interface Props {
  onChildsChange: () => void;
}

export const AddChild = (props: Props) => {
  const [form, setForm] = useState<CreateChildReq>({
    name: "",
    giftId: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };
  const sendForm = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetchData(`child`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.status === 200) {
      props.onChildsChange();
      return;
    }
    setLoading(false);
  };
  return (
    <form onSubmit={sendForm}>
      <input
        className="AddChild__input"
        type="text"
        placeholder="Add Child"
        value={form.name}
        onChange={(e) => updateForm("name", e.target.value)}
      />
      <Button isLoading={loading} size="md" type="submit" colorScheme="twitter">
        Save
      </Button>
    </form>
  );
};
