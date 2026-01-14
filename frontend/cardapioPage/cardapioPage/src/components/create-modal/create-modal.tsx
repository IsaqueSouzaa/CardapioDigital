import { useState } from "react";

/* ================= INPUT ================= */

interface InputProps {
  label: string;
  value: string;
  updateValue(value: string): void;
  type?: "text" | "number";
}

export function Input({
  label,
  value,
  updateValue,
  type = "text",
}: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      />
    </>
  );
}

/* ================= CREATE MODAL ================= */

export function CreateModal() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  return (
    <div className="modal-overflow">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>

        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />

          <Input
            label="price"
            type="number"
            value={String(price)}
            updateValue={(value) => setPrice(Number(value))}
          />

          <Input label="image" value={image} updateValue={setImage} />
        </form>
      </div>
    </div>
  );
}
