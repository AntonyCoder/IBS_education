import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import favoriteActiveIcon from '@svg/favorite_active';
import favoriteDisabledIcon from '@svg/favorite';
import { fetchProductData } from "@api/api";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import './product.scss';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // Загрузка данных товара
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                            </svg>
                        </button>
                        <input className="quantity" type="text" defaultValue={1} />
                        <button className="control">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                            </svg>
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
