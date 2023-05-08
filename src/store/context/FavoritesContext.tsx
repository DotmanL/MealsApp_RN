import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {}
});

function FavoritesProvider(props: Props) {
  const { children } = props;
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds: string[]) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds: string[]) =>
      currentFavIds.filter((cf) => cf !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ ids: favoriteMealIds, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
