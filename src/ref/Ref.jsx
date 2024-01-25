import { useRef } from "react";
import image1 from "../assets/ref.jpg";

function Ref() {
  const myRef1 = useRef();

  let myRef2 = useRef(0);

  let inputRef = useRef(null);

  function handleClick1() {
    console.log(myRef1.current);
  }

  function handleClick2() {
    // myRef2.current = myRef2.current + 1;
    // console.log("You clicked " + myRef2.current + " times!");
    console.log("Lets focus on input field");
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  }
  return (
    <>
      <button onClick={handleClick1}>myRef1</button>
      <div ref={myRef1}>This is REF1 div</div>
      <hr />
      <input type="text" id="myInput" ref={inputRef} />


      <button onClick={handleClick2}>myRef2</button>
      <div>
        <img src={image1} />
      </div>
    </>
  );
}

export default Ref;
