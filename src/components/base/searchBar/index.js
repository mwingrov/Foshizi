import {
  SearchBarWrapper,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBarElement";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarInput />
      <SearchBarIcon>
        <FaSearch />
      </SearchBarIcon>
    </SearchBarWrapper>
  );
};

export default SearchBar;
