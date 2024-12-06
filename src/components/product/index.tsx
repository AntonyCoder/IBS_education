import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "@slices/productSlice/productSlice";
import favoriteActiveIcon from '@svg/favorite_active.svg';
import favoriteDisabledIcon from '@svg/favorite.svg';
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import removeBtn from '@svg/remove_btn.svg';
import addBtn from '@svg/add_btn.svg';
import { AppDispatch } from "src/store";
import { IProductState } from "@slices/productSlice/types";
import './product.styles.scss';

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const { product, status, error } = useSelector((state: { product: IProductState }) => state.product)

    useEffect(() => {
        if(id) {
            dispatch(fetchProduct(id))
        }
    }, [id, dispatch]);

     if (status === 'loading') return <p>Загрузка...</p>;

     if (status === 'failed') return <p>Ошибка при загрузке данных: {error}</p>;
 
     if (!product) return <p>Товар не найден.</p>;

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
                    <div className="quantity-wrapper">
                        <button className="control">
                            <img src={removeBtn} alt="remove-btn" />
                        </button>
                        <input className="quantity" type="text" defaultValue={1} />
                        <button className="control">
                            <img src={addBtn} alt="add-btn" />
                        </button>
                    </div>
                    <button className="add-btn">Add to cart</button>
                    <img
                        className="favorite__icon-main"
                        src={product.like ? favoriteActiveIcon : favoriteDisabledIcon}
                        alt="favorite"
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
