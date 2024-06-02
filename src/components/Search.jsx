import { MdSearch } from "react-icons/md";
export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.4em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={handleSearchNote}
        
      />
    </div>
  );
}
