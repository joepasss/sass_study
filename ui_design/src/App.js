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
          src='https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlYXQlMjBob3JuZWQlMjBvd2x8ZW58MHx8MHx8&w=1000&q=80'
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
