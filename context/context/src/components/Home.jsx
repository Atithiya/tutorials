import React, { useContext } from "react"; //useContext คือตัวที่เอาไว้เข้าถึงข้อมูล ใช้คู่กับ DataContext ที่เราสร้างไว้ใน App
import { DataContext } from "../App";
import { Container, HomeLayout } from "../styles/style";

function Home() {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <Container>
      <h1>Home</h1>
      <HomeLayout>
        <img
          src={data.basics?.picture}
          alt={data.basic?.name}
          style={{ borderRadius: "10px" }}
        />
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontSize: "2rem" }}>
            <strong>Name</strong>:{data.basics?.name}
          </li>
          <li style={{ fontSize: "1.2rem" }}>
            <strong>Headline</strong>:{data.basics?.headline}
          </li>
        </ul>
      </HomeLayout>
    </Container>
  );
}

export default Home;
