import React from "react";
import { LOCAL_SERVER_URL } from "@api/apiConfig";
import { RootState } from "src/store";
import { toggleFavorite } from "@slices/favoriteSlice/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { ICatalogItemProps } from "./types";
import {
  ItemWrapper,
  ItemLink,
  FavoriteIconWrapper,
  StyledFavoriteIcon,
  StyledFavoriteBorderIcon,
  ItemImage,
  ItemTitle,
  ItemPrice
} from "./catalogCard.styled";

const CatalogItem: React.FC<ICatalogItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const favoriteIds = useSelector((state: RootState) => state.favorite.favoriteIds)

  const isFavorite = favoriteIds.includes(item.id);

  const handleToggleFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(toggleFavorite(item.id));
  };

  return (
    <ItemWrapper>
      <ItemLink to={`/product/${item.id}`}>
        <FavoriteIconWrapper onClick={handleToggleFavorite}>
          {isFavorite ? <StyledFavoriteIcon /> : <StyledFavoriteBorderIcon />}
        </FavoriteIconWrapper>
        <ItemImage
          src={`${LOCAL_SERVER_URL}${item.picture.path}`}
          alt={item.picture.alt} />
          <ItemTitle>{item.name}</ItemTitle>
          <ItemPrice>
            {item.price.value} {item.price.currency}
          </ItemPrice>
      </ItemLink>
    </ItemWrapper>
  );
};

export default CatalogItem;