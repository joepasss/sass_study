import './contact.scss';

function Contact() {
  return (
    <section id='contact'>
      <form className='contact-form'>
        <input type='name' placeholder='name' />
        <input type='email' placeholder='email' />
        <input type='text' placeholder='subject' />
        <textarea name='message' placeholder='message' />
        <input type='submit' value='submit' />
      </form>
    </section>
  );
}

export default Contact;
