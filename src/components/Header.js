import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <HeaderApp>
      <span>TrackIt</span>
      <img src={user.image} alt="" />
    </HeaderApp>
  );
}

export default Header;

const HeaderApp = styled.div`
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;

  img {
    width: 51px;
    height: 51px;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
  }

  span {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    color: #ffffff;
  }
`;
