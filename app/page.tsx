import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SelectedProjects from '@/components/SelectedProjects';
import AboutProcess from '@/components/AboutProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedProjects />
        <AboutProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
