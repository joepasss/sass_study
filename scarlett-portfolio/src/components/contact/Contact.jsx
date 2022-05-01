import './contact.scss';

function Contact() {
  return (
    <section id='contact'>
      <form className='contact__form'>
        <input type='text' placeholder='name' />
        <input type='email' placeholder='email' />
        <input type='text' placeholder='subject' />
        <textarea name='message' placeholder='message' />
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
