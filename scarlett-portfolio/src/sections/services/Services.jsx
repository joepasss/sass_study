import './services.scss';

import {
  FaQuidditch,
  FaMobileAlt,
  FaPaintRoller,
  FaEdit,
  FaProjectDiagram,
  FaTasks,
} from 'react-icons/fa';

function Services() {
  return (
    <section id='services'>
      <div className='service service1'>
        <FaQuidditch className='icon' />
        <h3 className='service-title'>UI Design</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>

      <div className='service service2'>
        <FaTasks className='icon' />
        <h3 className='service-title'>Web Development</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>

      <div className='service service3'>
        <FaMobileAlt className='icon' />
        <h3 className='service-title'>App Development</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>

      <div className='service service4'>
        <FaPaintRoller className='icon' />
        <h3 className='service-title'>Type Design</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>

      <div className='service service5'>
        <FaEdit className='icon' />
        <h3 className='service-title'>Blog Writer</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>

      <div className='service service6'>
        <FaProjectDiagram className='icon' />
        <h3 className='service-title'>Project Management</h3>
        <p className='service-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, id.
        </p>
      </div>
    </section>
  );
}

export default Services;
