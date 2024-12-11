import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { clearProduct, fetchProduct } from "@slices/productSlice/productSlice";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import { Status } from "@enums/status.enums";
import { toggleFavorite } from "@slices/favoriteSlice/favoriteSlice";
import Quantity from "@components/product/quantity";
import { resetQuantity } from "@slices/quantitySlice/quantitySlice";
import {
    ItemPage,
    ImageWrapper,
    ItemImage,
    ItemInformation,
    ItemTitle,
    ItemDescription,
    ItemDetails,
    PurchaseWrapper,
    ItemPrice,
    AddButton,
    FavoriteIconWrapper,
    StyledFavoriteIcon,
    StyledFavoriteBorderIcon
} from "./product.styled";

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();


    const { product, status, error } = useAppSelector((state) => state.product);
    const favoriteIds = useAppSelector((state) => state.favorite.favoriteIds);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id))
        }

        return () => {
            dispatch(clearProduct());
            dispatch(resetQuantity());
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
        <ItemPage>
            <ImageWrapper>
                <ItemImage
                    src={`${LOCAL_SERVER_URL}${product.picture.path}`}
                    alt={product.picture.alt} />
            </ImageWrapper>
            <ItemInformation>
                <ItemTitle>{product.name}</ItemTitle>
                <ItemDescription>{product.info}</ItemDescription>
                <ItemDetails>Details</ItemDetails>
                <ItemDescription>{product.details}</ItemDescription>
                <PurchaseWrapper>
                    <ItemPrice>
                        {product.price.value} {product.price.currency}
                    </ItemPrice>
                    <Quantity />
                    <AddButton variant="contained">Add to cart</AddButton>
                    <FavoriteIconWrapper
                        onClick={handleToggleFavorite}>
                        {isFavorite ? <StyledFavoriteIcon /> : <StyledFavoriteBorderIcon />}
                    </FavoriteIconWrapper>
                </PurchaseWrapper>
            </ItemInformation>
        </ItemPage>
    );
};

export default Product;
