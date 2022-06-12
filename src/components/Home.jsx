import React from 'react';
import styled from "styled-components";
import home from "assets/home.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import {homeAnimations,homeInfoAnimation} from "animation"

export default function Home() {
  return <Section id="home">
    <Navbar />
    <motion.div className="home"
    variants={homeAnimations}
    transition={{delay:0.3,duration:0.6, type:"tween"}}
    >
      <div className="content">
        <div className="title">
          <h1>Digital Crafters</h1>
        </div>
        <div className="subTitle">
          <p>Ea odio delectus non enim quod inventore dolor dolor deserunt sed harum corporis et blanditiis omnis aut assumenda ratione.</p>
        </div>
        <img src={play} alt="Play Button" />
      </div>
    </motion.div>
    <motion.div className="info"
    transition={{delay:0.3,duration:0.6, type:"tween"}}
    variants={homeInfoAnimation}
    >
      <div className="grid">
        <div className="col">
          <strong>Agency</strong>
          <p>Digital Crafters</p>
        </div>
        <div className="col">
          <strong>Email</strong>
          <p>matthieunedir@orange.com</p>
        </div>
        <div className="col">
          <strong>Mobile</strong>
          <p>+33675124578</p>
        </div>
        <div className="col">
          <strong>Adress</strong>
          <p>30 rue de la République</p>
          <p>13001 Marseille, France</p>
        </div>
        <div className="col">
          <strong>Services</strong>
          <p>Corporate Identity</p>
          <p>Design Web</p>
        </div>
        <div className="col">
          <strong>Working Hours</strong>
          <p>Monday to Friday</p>
          <p>08:00 to 18:00</p>
        </div>
      </div>
    </motion.div>
  </Section>;
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
