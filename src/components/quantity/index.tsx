import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store";
import { decrement, increment, setQuantity } from "@slices/quantitySlice";
import { Box, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import './quantity.styles.scss'

const Quantity: React.FC = () => {
    const quantity = useSelector((state: RootState) => state.quantity.value);
    const dispatch = useDispatch<AppDispatch>();

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            dispatch(setQuantity(value));
        }
    };

    return (
        <Box
            className='quantity-wrapper'>
            <IconButton
                onClick={handleDecrement}
                className="control">
                <RemoveIcon/>
            </IconButton>
            <TextField
                className="quantity"
                value={quantity}
                onChange={handleChange}
            />
            <IconButton
                onClick={handleIncrement}
                className="control">
                <AddIcon />
            </IconButton>
        </Box>
    )
}

export default Quantity;

