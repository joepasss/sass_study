function App() {
  return (
    <section>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum,
        animi corporis possimus natus fuga!
      </p>
      <form>
        <label htmlFor='name'>Your Name</label>
        <input type='text' name='' id='name' />

        <label htmlFor='message'>Your Message</label>
        <textarea id='message' rows='15'></textarea>

        <input type='submit' value='Send message' />
      </form>
    </section>
  );
}

export default App;
