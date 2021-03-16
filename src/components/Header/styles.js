import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  justify-content: space-between;
  position: absolute;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 114px;
  position: relative;
`;

export const LinkNav = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.text.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 256px;
  justify-content: space-between;
  color: #3877a1;
  font-size: 0.9em;
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.text.primary};
  padding: 0px 22px;
  height: 45px;
  border-radius: 6px;
  font-size: 0.8em;
  cursor: pointer;
  border: 0;
  width: ${(props) => {
    props.width || "";
  }};
  outline: none;
`;
