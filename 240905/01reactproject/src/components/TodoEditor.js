import React from "react";

export const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div class="editor_wrapper">
        <input placeholder="새로운 ToDo..." />
        <button>추가</button>
      </div>
    </div>
  );
};
