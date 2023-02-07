import { useState } from "react";
import Title from "./Title";
import Thermos from "./Thermos";

export default function Signature() {
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  function changeName(e) {
    setname(e.target.value);
  }
  function changeDate(e) {
    setDate(e.target.value);
  }

  document.body.style.background = "#eef";
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid black",
    margin: "20px",
    paddingBottom: "3px",
    marginTop: "200px",
    marginLeft: "70px",
  };
  const pStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Title classe={"title-main"} texte={name} />
      <Title classe={"subtitle"} texte={date} />
      <Thermos classe={"subtitle"} temp={100} />
      <p style={pStyle}>
        baskbcacakjcncnkjkdajksadnmmxnmshsan naxxhsandandnkdnjdcn
        kjakdsmnkdmna,baskbcacakjcncnkjkdajksadnmmxnmshsan naxxhsandandnkdnjdcn
        kjakdsmnkdmna,
      </p>
      <input
        onChange={changeName}
        type="text"
        placeholder="nom"
        style={inputStyle}
      />
      <input
        onChange={changeDate}
        type="date"
        name=""
        id=""
        style={inputStyle}
      />
    </div>
  );
}
