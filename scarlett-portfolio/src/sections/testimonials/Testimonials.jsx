import './testimonials.scss';

import tony from '../../assets/img/testimonials-1.jpg';
import natasha from '../../assets/img/testimonials-2.jpg';
import veers from '../../assets/img/testimonials-3.jpg';
import odinson from '../../assets/img/testimonials-4.jpg';

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='card'>
        <div className='card-img'>
          <img src={tony} alt='tony' />
        </div>
        <div className='card-content'>
          <h3 className='title'>Remarkable Eye</h3>
          <p className='para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum delectus officia molestiae, aliquam reprehenderit?
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img'>
          <img src={natasha} alt='natasha' />
        </div>
        <div className='card-content'>
          <h3 className='title'>Catchy Designs</h3>
          <p className='para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum delectus officia molestiae, aliquam reprehenderit?
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img'>
          <img src={veers} alt='veers' />
        </div>
        <div className='card-content'>
          <h3 className='title'>Smoking Website</h3>
          <p className='para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum delectus officia molestiae, aliquam reprehenderit?
          </p>
        </div>
      </div>

      <div className='card'>
        <div className='card-img'>
          <img src={odinson} alt='odinson' />
        </div>
        <div className='card-content'>
          <h3 className='title'>Easy to Work With</h3>
          <p className='para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            harum delectus officia molestiae, aliquam reprehenderit?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
