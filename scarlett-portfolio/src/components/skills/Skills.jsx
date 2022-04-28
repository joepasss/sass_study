import './skills.scss';

function Skills() {
  return (
    <section id='skills'>
      <div className='skills__design'>
        <h3 className='skills__design--title'>Design Skills</h3>

        <h4>Web Design</h4>
        <div className='skills__design--progress'>
          <span className='skills__design--progress__1'></span>
        </div>

        <h4>Print Design</h4>
        <div className='skills__design--progress'>
          <span className='skills__design--progress__2'></span>
        </div>

        <h4>Logo Design</h4>
        <div className='skills__design--progress'>
          <span className='skills__design--progress__3'></span>
        </div>

        <h4>Graphic Design</h4>
        <div className='skills__design--progress'>
          <span className='skills__design--progress__4'></span>
        </div>
      </div>
      <div className='skills__coding'>
        <h3 className='skills__coding--title'>Coding Skills</h3>

        <h4>CSS / SASS</h4>
        <div className='skills__coding--progress'>
          <span className='skills__coding--progress__1'></span>
        </div>

        <h4>Javascript</h4>
        <div className='skills__coding--progress'>
          <span className='skills__coding--progress__2'></span>
        </div>

        <h4>React</h4>
        <div className='skills__coding--progress'>
          <span className='skills__coding--progress__3'></span>
        </div>

        <h4>Python</h4>
        <div className='skills__coding--progress'>
          <span className='skills__coding--progress__4'></span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
