import './aboutme.scss';

import profile from '../../assets/img/content-img-02.jpg';

function Aboutme() {
  return (
    <section id='about-me'>
      <div className='about-me__img'>
        <img src={profile} alt='ME' />
      </div>

      <div className='about-me__content'>
        <h2 className='about-me__content--title'>ABOUT ME</h2>
        <p className='about-me__content--para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sequi molestias architecto ea laboriosam ex quis non eligendi optio
          neque quo, sapiente id blanditiis quas, iure necessitatibus. Eligendi,
          hic nihil.
        </p>
        <a href='#!' className='about-me__content--link'>
          Read More
        </a>
      </div>
    </section>
  );
}

export default Aboutme;
