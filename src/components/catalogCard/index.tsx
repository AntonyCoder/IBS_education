import React from "react";
import { Link } from "react-router-dom";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import favoriteActiveIcon from '@svg/favorite_active.svg';
import favoriteDisabledIcon from '@svg/favorite.svg';
import { ICatalogItemProps } from "./types";
import './catalogCard.styles.scss';

const CatalogItem: React.FC<ICatalogItemProps> = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/product/${item.id}`} className="item-link">
        <img
          className="item__favorite-icon"
          alt="favorite"
          src={item.like ? favoriteActiveIcon : favoriteDisabledIcon}
        />
        <img
          src={`${LOCAL_SERVER_URL}${item.picture.path}`}
          alt={item.picture.alt}
          className="item-image"
        />
        <span className="item-title">{item.name}</span>
        <span className="item-price">
          {item.price.value} {item.price.currency}
        </span>
      </Link>
    </div>
  );
};

export default CatalogItem;