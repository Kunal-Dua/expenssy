import { TextField } from "@mui/material";
import type { ChangeEvent } from "react";

interface TextBoxInputs {
    id: string;
    type?: string;
    label: string;
    value: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ({
    id,
    type,
    label,
    value,
    required,
    onChange,
}: TextBoxInputs) => {
    return (
        <TextField
            id={id}
            type={type}
            variant="outlined"
            label={label}
            value={value}
            required={required}
            onChange={onChange}
        />
    );
};

export default TextBox;
