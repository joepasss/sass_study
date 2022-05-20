import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Booking } from './sections/booking/Booking';
import { Villas } from './sections/villas/Villas';
import { Motto } from './sections/motto/Motto';
import { Events } from './sections/events/Events';
import { Gallery } from './sections/gallery/Gallery';
import { Features } from './sections/features/Features';
import { Testimonials } from './sections/testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Booking />
      <Villas />
      <Motto />
      <Events />
      <Gallery />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
