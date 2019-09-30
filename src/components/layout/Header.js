import React from 'react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const realHeight = window.innerHeight;

  return (
    <div className='header' style={{ height: realHeight }}>
      <div className='header__title'>
        <div className='header__title--text'>
          <h1>PyDev</h1>
          <h3>wednesdays at 6pm</h3>
          <h3>coover 2022</h3>
          <div className='header__icons'>
            <a
              className='header__icon-link-wrapper'
              href='https://github.com/PyDevClub'
            >
              <div className='header__github'></div>
            </a>
            <a href='https://www.facebook.com/isupydev'>
              <div className='header__facebook'></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
