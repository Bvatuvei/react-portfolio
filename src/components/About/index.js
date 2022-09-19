import React from 'react';
import coverImage from '../../assets/images/bryson.jpg';
function About() {
  return (
    <section className="my-5">
      <div className='flex-div'>
      <h1 id="about" className='about-h1'>Who Am I?</h1>
      </div>
      <div className='flex-div'>
      <img src={coverImage} className=" about-me-image " alt="cover" />
      </div>
      <div className="my-2">
        <p className='text-center'>
        My name is Bryson Filosiliva Vatuvei. I was born in Las Vegas, Nevada on April 13, 2000. 
        Although I've lived in a few states I grew up mainly in Utah. 
        Some values I hold very close to me are family and kindness. 
        I have worked in the construction field for the past 3 years, but I love technology so I wanted to work in something having to do with it.
        I have finished and earned my certificate from the University of Utah's full stack development bootcamp and I hope to get into the web developing industry!
        </p>
      </div>
    </section>
  );
}

export default About;
