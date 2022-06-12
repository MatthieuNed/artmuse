import React from 'react';
import { BsBehance,BsFacebook,BsTwitter,BsYoutube } from 'react-icons/bs'
import styled from "styled-components"

function Footer() {
  return <Foot>
    <span>
      &copy; template created by Matthieu Nedir</span>
      <div className="footer__social__icons">
      <BsBehance/>
      <BsFacebook/>
      <BsTwitter/>
      <BsYoutube/>
      </div>
  </Foot>;
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
