import React from 'react';

const realHeight = window.innerHeight;

export const Projects = () => {
  return (
    <div className='projects' style={{ height: 0.9 * realHeight }}>
      <div className='projects__select-container'>
        <div className='projects__selected-project-title'>
          <h2>Project Title</h2>
        </div>
        <div className='projects__selected-project-desc'>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            minima consectetur sapiente nam repudiandae accusantium voluptatum
            soluta eveniet nisi corporis?
          </h3>
        </div>
      </div>
      <div className='projects__big-img-container'></div>
    </div>
  );
};
