import './features.scss';

export const Features = () => {
  return (
    <>
      <section id='features-content'>
        <div className='feature-1'>
          <h2 className='title'>Cocktail Package</h2>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia
            perferendis dolorem quos illum reiciendis at exercitationem
            architecto ullam minus.
          </p>
        </div>

        <div className='feature-2'>
          <h2 className='title'>Surfing Package</h2>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officia
            perferendis dolorem quos illum reiciendis at exercitationem
            architecto ullam minus.
          </p>
        </div>
      </section>

      <section id='features-text'>
        <div className='content'>
          <h2 className='title'>Features</h2>
        </div>
      </section>
    </>
  );
};
