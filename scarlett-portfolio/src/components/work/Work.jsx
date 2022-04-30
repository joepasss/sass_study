import './work.scss';

import poster from '../../assets/img/portfolio-design-01-1.jpg';
import paperBag from '../../assets/img/portfolio-creative-02-1.jpg';
import clothBag from '../../assets/img/portfolio-creative-01-1.jpg';
import branding from '../../assets/img/portfolio-branding-02-1.jpg';
import cup from '../../assets/img/portfolio-branding-01-1.jpg';
import bookCover from '../../assets/img/portfolio-print-02-1.jpg';

function Work() {
  return (
    <section id='work'>
      <div className='card'>
        <img className='work-image' src={poster} alt='poster' />
      </div>

      <div className='card'>
        <img className='work-image' src={paperBag} alt='paperBag' />
      </div>

      <div className='card'>
        <img className='work-image' src={clothBag} alt='clothBag' />
      </div>

      <div className='card'>
        <img className='work-image' src={branding} alt='branding' />
      </div>

      <div className='card'>
        <img className='work-image' src={cup} alt='cup' />
      </div>

      <div className='card'>
        <img className='work-image' src={bookCover} alt='bookCover' />
      </div>
    </section>
  );
}

export default Work;
