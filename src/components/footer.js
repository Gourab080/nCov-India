import React from 'react';
import * as Icon from 'react-feather';

function Footer(props) {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://www.pandemic2020.in | Coronavirus cases live Updates India"
        />*/}

        <h5>We stand with everyone fighting on the frontlines ♥️</h5>
        <div className="link">
          <a href="https://pandemic2020.in">Pandemic 2020</a>
        </div>
       
        <a
          className="button excel"
          href="https://Pandemic2020.in"
          target="_noblank"
        >
          <Icon.Code />
          <span>Made By Gourab</span>
        </a>
        
        <a
          href="https://ko-fi.com/gourabdas"
          className="button telegram"
          target="_noblank"
        >
          <Icon.Coffee />
          <span>Buy Me A Coffee</span>
        </a>

      </footer>
  );
}

export default Footer;
