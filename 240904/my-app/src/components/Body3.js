import React, { useState } from "react";

const Body2 = () => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeGender = () => {};
  const onChangeBirth = () => {};
  const onChangeBio = (e) => {
    onChangeBio(e.target.value);
  };

  const handleOnChange = (e) => {
    
  };

  return (
    <div>
      <div>
        <input value={name} onChange={handleOnChange} placeholder="이름" />
      </div>
      <div>
        <select onChange={onChangeGender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" onChange={handleOnChange} />
      </div>
      <div>
        <textarea onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default Body2;
