import React from "react";

const Filtering = () => {
  const handleType = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          
          type="text"
          placeholder="Type here"
          class="input input-bordered text-black    "
        />
      </div>
    </div>
  );
};

export default Filtering;
