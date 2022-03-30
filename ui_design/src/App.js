function App() {
  return (
    // main#main-content>section*3.section.sections-$>img+div.content>p{Nov 15, 2100}+h3{Some Title}+p{Some Text}

    <main id='main-content'>
      <section className='section section-1'>
        <img
          src='https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg'
          alt=''
        />
        <div className='contents'>
          <p>Nov 10, 2100</p>
          <h3>DOG</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            laborum possimus dolore non illo sint, eveniet nihil labore quidem
            magnam quo consequatur et minima blanditiis impedit debitis, neque,
            hic ea?
          </p>
        </div>
      </section>

      <section className='section section-2'>
        <img
          src='https://i0.wp.com/wilderness-society.org/wp-content/uploads/2021/03/moose-70254.jpg'
          alt=''
        />
        <div className='contents'>
          <p>Nov 10, 2100</p>
          <h3>Moose</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            laborum possimus dolore non illo sint, eveniet nihil labore quidem
            magnam quo consequatur et minima blanditiis impedit debitis, neque,
            hic ea?
          </p>
        </div>
      </section>

      <section className='section section-3'>
        <img
          src='https://www.allaboutbirds.org/guide/assets/photo/297366501-480px.jpg'
          alt=''
        />
        <div className='contents'>
          <p>Nov 10, 2100</p>
          <h3>Owl</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            laborum possimus dolore non illo sint, eveniet nihil labore quidem
            magnam quo consequatur et minima blanditiis impedit debitis, neque,
            hic ea?
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
