import './aboutme.scss';

import profile from '../../assets/img/content-img-02.jpg';

function Aboutme() {
  return (
    <section id='about-me'>
      <div className='img'>
        <img src={profile} alt='profile image' />
      </div>

      <div className='content'>
        <h2 className='title'>About Me</h2>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          numquam nobis esse labore quidem! Maiores recusandae quidem eos est
          nostrum.
        </p>
        <a href='#!' className='link'>
          Read More
        </a>
      </div>
    </section>
  );
}

export default Aboutme;
