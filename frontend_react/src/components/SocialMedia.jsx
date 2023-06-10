import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaChessBishop, FaGithub } from 'react-icons/fa';
import { SiLichess } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/OluOrija' target="_blank" rel="noreferrer">
      <FaGithub /></a>
    </div>
    <div>
      <a href='https://twitter.com/_ekelola' target="_blank" rel="noreferrer">
      <BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.chess.com/member/ekelola' target="_blank" rel="noreferrer">
      <FaChessBishop /></a>
    </div>
    <div>
      <a href='https://lichess.org/@/ekelola' target="_blank" rel="noreferrer">
      <SiLichess /></a>
    </div>
  </div>
);

export default SocialMedia; 
