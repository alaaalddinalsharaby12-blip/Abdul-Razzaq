import Hero from '../sections/Hero';
import ServicesPreview from '../sections/ServicesPreview';
import ProjectsPreview from '../sections/ProjectsPreview';
import ContactPreview from '../sections/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactPreview />
    </>
  );
}