import './index.css'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ value, onChange, placeholder, id = "" }) => {
  return (
    <div  className="input-search">
      <form
        action="#"
        autoComplete="off"
      >
        <input
          name={"search" + id}
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchBar;
