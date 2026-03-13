import { useReducer, useState, useMemo, useCallback } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { favouritesReducer } from "../reducer/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const storedFav =
    JSON.parse(localStorage.getItem("favourites")) || [];

  const [favourites, dispatch] =
    useReducer(favouritesReducer, storedFav);

  const [search, setSearch] = useState("");

  const toggleFav = (photo) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo
    });
  };

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading)
    return <p className="text-center">Loading...</p>;

  if (error)
    return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <SearchBar
        search={search}
        setSearch={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={favourites.some(
              (fav) => fav.id === photo.id
            )}
            toggleFav={toggleFav}
          />
        ))}

      </div>

    </div>
  );
}