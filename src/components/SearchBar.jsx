export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 border rounded mb-4"
    />
  );
}