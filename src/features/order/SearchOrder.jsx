import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="duration:300 w-24 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-xs placeholder:text-stone-400 focus:w-36 focus:outline-none focus:ring focus:ring-yellow-500/50 sm:w-64 sm:placeholder:text-base sm:focus:w-72 "
      />
    </form>
  );
}

export default SearchOrder;
