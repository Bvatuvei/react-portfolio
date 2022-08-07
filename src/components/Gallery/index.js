import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../Resume';
import Project from '../Project';

function Gallery(props) {
  const { currentCategory } = props;
  return (
      <section>
          <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
          <p>{currentCategory.description}</p>
      </section>
  )
}
export default Gallery;