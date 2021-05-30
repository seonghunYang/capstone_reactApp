import { Container } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Lorem from '../components/LoremIpsum';
import Footer from '../components/Footer';

function RealTime() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        <Lorem/>
        <Lorem/>
        <Lorem/>
      </Container>
      <Footer/>
    </>
  );
}

export default RealTime;