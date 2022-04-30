import './skills.scss';

function Skills() {
  return (
    <section id='skills'>
      <div className='design'>
        <h3 className='design-title'>Design Skills</h3>

        <h4>Web Design</h4>
        <div className='progress'>
          <span className='progress-1'></span>
        </div>

        <h4>Print Design</h4>
        <div className='progress'>
          <span className='progress-2'></span>
        </div>

        <h4>Logo Design</h4>
        <div className='progress'>
          <span className='progress-3'></span>
        </div>

        <h4>Graphic Design</h4>
        <div className='progress'>
          <span className='progress-4'></span>
        </div>
      </div>

      <div className='coding'>
        <h3 className='coding-title'>Coding Skills</h3>

        <h4>JavaScript</h4>
        <div className='progress'>
          <span className='progress-1'></span>
        </div>

        <h4>TypeScript</h4>
        <div className='progress'>
          <span className='progress-2'></span>
        </div>

        <h4>CSS / SASS</h4>
        <div className='progress'>
          <span className='progress-3'></span>
        </div>

        <h4>React</h4>
        <div className='progress'>
          <span className='progress-4'></span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
