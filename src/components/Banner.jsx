import {Navigate, Link} from "react-router-dom";
import { userToggle } from "../atom";
import { useRecoilValue } from 'recoil';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 70px;
    background: red;
    position: relative;
    cursor: default;
`;
const Title = styled.div`
  cursor: pointer;
  width: 300px;
  height: 100%;
  margin: 0;
  background: blue;
  position: relative;
  display: inline-block;
  h1{
    font-size: 40px;
    position: absolute;
    margin: 0;
    left: 18%;
    top: 12%;
    font-weight: 700;
  }
`;

const Nav = styled.ul`
  background: green;
  width: 30vw;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 0%;
  display: flex;
  justify-content: center;
  transform: translate(0,-50%);
  li{
    cursor: pointer;
    float: left;
    margin-left: 1vw;
    margin-right: 1vw;
  }
`;

function Banner() {
  const user = useRecoilValue(userToggle);
  return (
    <Wrapper>
        <Title>
          <Link to="/"><h1>같이 살자!</h1></Link>
        </Title>
        <Nav>
          <Link to="/login"><li>"로그인/회원가입"</li></Link>
          <li>ex</li>
          <li>am</li>
        </Nav>
    </Wrapper>
  );
}

export default Banner;