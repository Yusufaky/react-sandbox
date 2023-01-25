import React from "react";
import { useRef } from "react";
function UseRefExemple() {
  const inputRef = useRef();
  const paraRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    // inputRef.current.style.background = "red";
    paraRef.current.innerText = "red";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          ref={inputRef}
          className="form-control mb-2"
          id="name"
        />
        <button type="submit" className="btn  btn-primary">
          Enviar
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExemple;
