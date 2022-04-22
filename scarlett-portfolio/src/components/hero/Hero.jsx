import './hero.scss';

function Hero() {
  return (
    <section id='showcase'>
      <div id='showcase__content'>
        <h1 className='showcase__content--title'>JOE PASS</h1>
        <p className='showcase__content--para'>
          UX Designer / Frontend Developer
        </p>
        <a href='#!' className='showcase__content--link'>
          MY WORK
        </a>
      </div>
    </section>
  );
}

export default Hero;
