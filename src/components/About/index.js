import React from 'react';
import coverImage from '../../assets/images/bryson.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My name is Bryson Filosiliva Vatuvei. I was born in Las Vegas, Nevada in 2000 which makes me 22 years old. 
        Although ive lived in a few states I grew up mainly in Utah. 
        Some values I hold very close to me are family and kindness. 
        I have worked in the construction field for the past 3 years, but I love technology so I wanted to work in something having to do with it.
        I am currently in a full-stack coding bootcamp at the University of Utah, and I hope after I am done here I can continue to learn more about coding.
        </p>
      </div>
    </section>
  );
}

export default About;
