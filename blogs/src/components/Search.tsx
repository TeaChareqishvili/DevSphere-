import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
  filteredLength: number;
};

export default function Search({
  query,
  setQuery,
  filteredLength,
}: SearchProps) {
  return (
    <div className="container">
      <h4
        className="results-count"
        style={{
          opacity: filteredLength > 0 ? 1 : 0,
          pointerEvents: filteredLength > 0 ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        Results: {filteredLength}{" "}
      </h4>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by tags  example ai, community, chatgpt..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
}
