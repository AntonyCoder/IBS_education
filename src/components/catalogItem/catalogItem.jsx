import React from "react";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import favoriteActiveIcon from '@svg/favorite_active';
import favoriteDisabledIcon from '@svg/favorite';
import './catalogItem.scss';

const CatalogItem = ({ item }) => {
    return (
      <div className="item">
        <a href={`item.html?id=${item.id}`} className="item-link">
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
        </a>
      </div>
    );
  };
  
  export default CatalogItem;