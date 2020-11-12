export const getFavorites = (): { [key: string]: boolean } => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : {};
};

export const isFavorite = (stockNumber: string | number): boolean => {
  const storedFavorite: { [key: string]: boolean } = getFavorites();
  return storedFavorite[stockNumber];
};

export const toggleFavorite = (stockNumber: string | number): void => {
  const storedFavorite: { [key: string]: boolean } = getFavorites();
  if (storedFavorite[stockNumber]) {
    delete storedFavorite[stockNumber];
  } else {
    storedFavorite[stockNumber] = true;
  }
  localStorage.setItem("favorites", JSON.stringify(storedFavorite));
};
