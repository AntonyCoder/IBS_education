import React from "react";
import { Link } from "react-router-dom";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import { RootState } from "src/store";
import { toggleFavorite } from "@slices/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Colors } from "@enums/colors.enums";
import { ICatalogItemProps } from "./types";
import './catalogCard.styles.scss';

const CatalogItem: React.FC<ICatalogItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const favoriteIds = useSelector((state: RootState) => state.favorite.favoriteIds)

  const isFavorite = favoriteIds.includes(item.id);

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(toggleFavorite(item.id));
  };

  return (
    <div className="item">
      <Link to={`/product/${item.id}`} className="item-link">
        <div
          onClick={handleToggleFavorite}
          className="favorite-icon-wrapper"
          style={{ cursor: "pointer" }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{
              color: Colors.activeColor,
              fontSize: '24px'
            }}/>
          ) : (
            <FavoriteBorderIcon sx={{
              color: Colors.iconBorder,
              fontSize: '24px',
            }} />
          )}
        </div>
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