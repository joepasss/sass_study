import './testimonials.scss';

import tony from '../../assets/img/testimonials-1.jpg';
import natasha from '../../assets/img/testimonials-2.jpg';
import veers from '../../assets/img/testimonials-3.jpg';
import odinson from '../../assets/img/testimonials-4.jpg';

function Testimonials() {
  return (
    <section id='testimonials'>
      <div className='testimonials__card'>
        <div className='testimonials__card--img'>
          <img src={tony} alt='tony' />
        </div>
        <div className='testimonials__card--content'>
          <h3 className='testimonials__card--content__title'>Remarkable Eye</h3>
          <p className='testimonials__card--content__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            itaque beatae quam illo excepturi commodi.
          </p>
        </div>
      </div>

      <div className='testimonials__card'>
        <div className='testimonials__card--img'>
          <img src={natasha} alt='natasha' />
        </div>
        <div className='testimonials__card--content'>
          <h3 className='testimonials__card--content__title'>Catchy Designs</h3>
          <p className='testimonials__card--content__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            itaque beatae quam illo excepturi commodi.
          </p>
        </div>
      </div>

      <div className='testimonials__card'>
        <div className='testimonials__card--img'>
          <img src={veers} alt='veers' />
        </div>
        <div className='testimonials__card--content'>
          <h3 className='testimonials__card--content__title'>
            Smoking Website
          </h3>
          <p className='testimonials__card--content__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            itaque beatae quam illo excepturi commodi.
          </p>
        </div>
      </div>

      <div className='testimonials__card'>
        <div className='testimonials__card--img'>
          <img src={odinson} alt='odinson' />
        </div>
        <div className='testimonials__card--content'>
          <h3 className='testimonials__card--content__title'>
            Easy To Work with
          </h3>
          <p className='testimonials__card--content__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            itaque beatae quam illo excepturi commodi.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
