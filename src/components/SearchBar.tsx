import { Icon } from '@iconify/react';

const SearchBar = () => {
  return (
    <form className="w-full">
      <label
        htmlFor="search"
        className="relative mx-auto text-gray-600 shadow-barSS "
      >
        <input
          className="h-10 w-full rounded-md border-2 border-transparent px-5 pr-16 text-sm caret-primaryColor focus:border-2 focus:border-primaryColor focus:outline-none"
          type="search"
          name="search"
          placeholder="Search your chat......"
        />
        <button
          type="submit"
          className="absolute bottom-0 -top-0.5 right-0 mr-4 h-7 w-7"
        >
          <Icon
            className="h-7 w-7 text-primaryColor"
            icon="akar-icons:search"
          />
        </button>
      </label>
    </form>
  );
};
export default SearchBar;
