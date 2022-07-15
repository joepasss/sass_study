import { FC } from 'react';

// Sections
import { Header } from '../sections/header/Header';
import { Motto } from '../sections/motto/Motto';
import { Showcase } from '../sections/showcase/Showcase';
import { Features } from '../sections/features/Features';
import { Trainers } from '../sections/trainers/Trainers';
import { Testimonials } from '../sections/testimonials/Testimonials';
import { Clients } from '../sections/clients/Clients';
import { Register } from '../sections/register/Register';
import { Footer } from '../sections/footer/Footer';

export const Home: FC = () => {
  return (
    <div className='container'>
      <Header />
      <Showcase />
      <Motto />
      <Features />
      <Trainers />
      <Testimonials />
      <Clients />
      <Register />
      <Footer />
    </div>
  );
};
