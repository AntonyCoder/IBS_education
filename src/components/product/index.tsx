import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@slices/productSlice/productSlice";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import { AppDispatch, RootState } from "src/store";
import { Status } from "@enums/status.enums";
import { Button } from "@mui/material";
import { toggleFavorite } from "@slices/favoriteSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Colors } from "@enums/colors.enums";
import Quantity from "@components/quantity";
import { IProductState } from "@slices/productSlice/types";
import './product.styles.scss';

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();


    const { product, status, error } = useSelector((state: { product: IProductState }) => state.product);
    const favoriteIds = useSelector((state: RootState) => state.favorite.favoriteIds);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id))
        }
    }, [id, dispatch]);

    if (status === Status.Loading) return <p>Загрузка...</p>;
    if (status === Status.Failed) return <p>Ошибка при загрузке данных: {error}</p>;
    if (!product) return <p>Товар не найден.</p>;

    const isFavorite = favoriteIds.includes(product.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(product.id));
    }

    return (
        <div className="item-page">
            <div className="image-wrapper">
                <img
                    className="item__image-main"
                    src={`${LOCAL_SERVER_URL}${product.picture.path}`}
                    alt={product.picture.alt}
                />
            </div>
            <div className="item-information">
                <h1 className="item__title-main">{product.name}</h1>
                <p className="item-description">{product.info}</p>
                <span className="item-details">Details</span>
                <p className="item-description">{product.details}</p>
                <div className="purchase-wrapper">
                    <span className="item__price-main">
                        {product.price.value} {product.price.currency}
                    </span>
                    <Quantity />
                    <Button variant='contained' className="add-btn">Add to cart</Button>
                    <div onClick={handleToggleFavorite} className="favorite__icon-wrapper" style={{ cursor: 'pointer' }}>
                        {isFavorite ? (
                            <FavoriteIcon sx={{
                                color: Colors.activeColor,
                                fontSize: '24px'
                            }} />
                        ) : (
                            <FavoriteBorderIcon sx={{
                                color: Colors.iconBorder,
                                fontSize: '24px',
                            }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
