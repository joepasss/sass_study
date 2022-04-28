// assets
import poster from '../../assets/img/portfolio-design-01-1.jpg';
import paperBag from '../../assets/img/portfolio-creative-02-1.jpg';
import clothBag from '../../assets/img/portfolio-creative-01-1.jpg';
import branding from '../../assets/img/portfolio-branding-02-1.jpg';
import cup from '../../assets/img/portfolio-branding-01-1.jpg';
import bookCover from '../../assets/img/portfolio-print-02-1.jpg';

// sass
import './work.scss';

function Work() {
  return (
    <section id='work'>
      <div className='work__card'>
        <img className='image' src={poster} alt='poster' />
      </div>

      <div className='work__card'>
        <img className='image' src={paperBag} alt='paper-bag' />
      </div>

      <div className='work__card'>
        <img className='image' src={clothBag} alt='clothBag' />
      </div>

      <div className='work__card'>
        <img className='image' src={branding} alt='branding' />
      </div>

      <div className='work__card'>
        <img className='image' src={cup} alt='cup' />
      </div>

      <div className='work__card'>
        <img className='image' src={bookCover} alt='book-cover' />
      </div>
    </section>
  );
}

export default Work;
