import React, { useEffect } from 'react';
import { useScroll } from './UseScroll';
import './ADNavBar.scss';

const ADNavBar = () => {
  const { scrollY, scrollX, scrollDirection } = useScroll();

  useEffect(() => {
    console.log(1234);
  }, [scrollX]);

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            Transparent to Solid Nav a
          </a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Another Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ADNavBar;
