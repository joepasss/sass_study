import './features.scss';
import cocktail from '../../assets/img/Features/cocktail.jpg';
import surfing from '../../assets/img/Features/surfing.jpg';

type data = {
  imgSrc: string;
  title: string;
  para: string;
};

export const Features = () => {
  const featuresData: data[] = [
    {
      imgSrc: cocktail,
      title: 'Cocktail Package',
      para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis ipsum repudiandae.',
    },
    {
      imgSrc: surfing,
      title: 'Surfing Package',
      para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis ipsum repudiandae.',
    },
  ];

  return (
    <>
      <section id='features-content'>
        {featuresData.map((features: data, index: number) => {
          return (
            <div className={'feature-' + (index + 1)} key={index}>
              <img src={features.imgSrc} alt='' className='background-img' />
              <h2 className='title'>{features.title}</h2>
              <p className='para'>{features.para}</p>
            </div>
          );
        })}
      </section>

      <section id='features-text'>
        <div className='content'>
          <h2 className='title'>Features</h2>
        </div>
      </section>
    </>
  );
};
