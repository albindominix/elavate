import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchField() {
  const { search, setSearch} = useContext(GlobalContext);

  // State to keep track of the search input value
  const [value, setValue] = useState("");

  // Reset the search input value when 'search' state is empty
  useEffect(() => {
    if (!search) {
      setValue("");
    }
  }, [search]);

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    // update the 'search' state with the input value
    setSearch(value);
  }

  return (
    // Container for the search input field
    <div className="bg-white overflow-auto rounded-md flex-1">
      {/* Form to handle search input */}
      <form className="flex justify-between w-full" onSubmit={handleSubmit}>
        {/* Input field for search */}
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="border-none outline-none w-full p-2.5 max-[768px]:w-[95%] max-[768px]:m-[0auto]"
          placeholder="Search...."
        />
        <div>
          {/* Submit button for search */}
          <button
            type="submit"
            className="float-right p-2.5 outline-none bg-[#f26522]"
          >
            {/* Search icon */}
            <AiOutlineSearch className="text-2xl text-white font-bold" />
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
