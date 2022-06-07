import './events.scss';

export const Events = () => {
  return (
    <>
      <section id='events-content'>
        <div className='event-1'>
          <h2 className='title'>Beach Party</h2>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo, modi unde ab ipsum quidem labore expedita atque saepe sint.
          </p>
        </div>

        <div className='event-2'>
          <h2 className='title'>Culture Discovery</h2>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo, modi unde ab ipsum quidem labore expedita atque saepe sint.
          </p>
        </div>
      </section>

      <section id='events-text'>
        <div className='content'>
          <h2 className='title'>Events</h2>
        </div>
      </section>
    </>
  );
};
