import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import favoriteActiveIcon from '@svg/favorite_active';
import favoriteDisabledIcon from '@svg/favorite';
import { fetchProductData } from "@api/api";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import './product.scss';
import removeBtn from '@svg/remove_btn';
import addBtn from '@svg/add_btn';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductData = async () => {
            try {
                const data = await fetchProductData(id);
                setProduct(data.content);
            } catch (e) {
                console.error('Ошибка при загрузке данных товара:', e);
            }
        };

        getProductData();
    }, [id]);

    if (!product) return <p>Загрузка...</p>;

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
