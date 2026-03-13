export const favouritesReducer = (state, action) => {
  switch (action.type) {

    case "TOGGLE_FAV":

      const exists = state.find((photo) => photo.id === action.payload.id);

      let updated;

      if (exists) {
        updated = state.filter((photo) => photo.id !== action.payload.id);
      } else {
        updated = [...state, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updated));

      return updated;

    default:
      return state;
  }
};