import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        disabled={loading}
      />
      <button type="submit" className="search-btn" disabled={loading || !input.trim()}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}