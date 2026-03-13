export default function PhotoCard({ photo, isFav, toggleFav }) {
  return (
    <div className="border rounded-lg shadow p-2">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover rounded"
      />

      <div className="flex justify-between items-center mt-2">

        <p className="text-sm font-semibold">
          {photo.author}
        </p>

        <button
          onClick={() => toggleFav(photo)}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>
  );
}