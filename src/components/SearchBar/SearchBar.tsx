import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./search.scss";
type SetPropsType = {
  handleSuggestionBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({ handleSuggestionBox }: SetPropsType) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    handleSuggestionBox((prev) => !prev);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <form className="searchWrapper" onSubmit={(e) => onSubmitHandler(e)}>
      <input
        type="text"
        placeholder="Search"
        className="searchField"
        onClick={handleSearch}
      ></input>
      <CiSearch size={70} />
    </form>
  );
};

export default SearchBar;
