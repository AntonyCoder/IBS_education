import React from "react";
import { decrement, increment, setQuantity } from "@slices/quantitySlice/quantitySlice";
import { useAppDispatch, useAppSelector } from "@helpers/hooks";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    QuantityWrapper,
    StyledIconButton,
    StyledTextField,
} from "./quantity.styled";

const Quantity: React.FC = () => {
    const quantity = useAppSelector((state) => state.quantity.value);
    const dispatch = useAppDispatch();

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            dispatch(setQuantity(value));
        }
    };

    return (
        <QuantityWrapper>
            <StyledIconButton
                onClick={handleDecrement}
            >
                <RemoveIcon />
            </StyledIconButton>
            <StyledTextField
                value={quantity}
                onChange={handleChange}
            />
            <StyledIconButton
                onClick={handleIncrement}
            >
                <AddIcon />
            </StyledIconButton >
        </QuantityWrapper >
    )
}

export default Quantity;

