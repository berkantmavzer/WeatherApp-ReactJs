import React, { useState } from "react";

function Search({ InputValue }) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    InputValue(text);
  };
  return (
    <div className="my-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Aramak İçin Şehir Giriniz"
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full placeholder:text-white text-white"
        />
      </form>
    </div>
  );
}

export default Search;
