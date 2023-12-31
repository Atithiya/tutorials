import React, { useContext } from "react";
import { DataContext } from "../App";
import { SkillsCom, Container } from "../styles/style";

function About() {
  const data = useContext(DataContext);
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <h1>About</h1>
      <hr />
      <img
        src={data.basics?.picture}
        alt={data.basics?.name}
        width={"200px"}
        style={{ borderRadius: "100%" }}
      />
      <ul style={{ listStyle: "none" }}>
        <li style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Name : {data.basics?.name}
        </li>
        <li>{data.basics?.headline}</li>
      </ul>
      <hr />
      <h3>My Skills</h3>
      <div>
        <SkillsCom style={{ listStyle: "none" }}>
          {data.skills?.map((val, index) => (
            <li key={index}>
              <strong>{val.name}</strong>
              <br />
              Level : {val.level}
            </li>
          ))}
        </SkillsCom>
      </div>
    </div>
  );
}

export default About;
