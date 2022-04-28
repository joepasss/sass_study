import './services.scss';

import {
  FaQuidditch,
  FaTasks,
  FaMobileAlt,
  FaPaintRoller,
  FaEdit,
  FaProjectDiagram,
} from 'react-icons/fa';

function Services() {
  return (
    <section id='services'>
      <div className='service services__service-1'>
        <FaQuidditch className='icon' />
        <h3 className='services--title services__service-1--title'>
          UI Design
        </h3>
        <p className='services--para services__service-1--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>

      <div className='service services__service-2'>
        <FaTasks className='icon' />
        <h3 className='services--title services__service-3--title'>
          Web Development
        </h3>
        <p className='services--para services__service-2--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>

      <div className='service services__service-3'>
        <FaMobileAlt className='icon' />
        <h3 className='services--title services__service-3--title'>
          App Development
        </h3>
        <p className='services--para services__service-3--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>

      <div className='service services__service-4'>
        <FaPaintRoller className='icon' />
        <h3 className='services--title services__service-4--title'>
          Type Design
        </h3>
        <p className='services--para services__service-4--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>

      <div className='service services__service-5'>
        <FaEdit className='icon' />
        <h3 className='services--title services__service-5--title'>
          Blog Writer
        </h3>
        <p className='services--para services__service-5--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>

      <div className='service services__service-6'>
        <FaProjectDiagram className='icon' />
        <h3 className='services--title services__service-6--title'>
          Project Management
        </h3>
        <p className='services--para services__service-6--para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quisquam corporis qui ad hic culpa.
        </p>
      </div>
    </section>
  );
}

export default Services;
