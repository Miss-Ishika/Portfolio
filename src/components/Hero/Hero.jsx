import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>

        <div className='hero-img'>
            <div>
                <img src="./assets/images/prof.jpg" alt='' />
            </div>

            <div className='tech-icon'>
                <img src='./assets/images/git2.png' alt='' />
                <img src='./assets/images/hack.png' alt='' />
                <img src='./assets/images/chef.png' alt='' />
            </div>
        </div>
    </section>
  );
};

export default Hero;
