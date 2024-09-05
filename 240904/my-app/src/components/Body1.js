import { useState } from "react";

const Body1 = () => {
  const [option, setOption] = useState("");

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값 :", e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleOnChange}></textarea>
      {/* <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select> */}
      {/* <input type="date" value={date} onChange={handleOnChange} />{" "} */}
      {/* 'onChange'로 수정 */}
      {/* <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}
      {/* <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button> */}
    </div>
  );
};

export default Body1;
