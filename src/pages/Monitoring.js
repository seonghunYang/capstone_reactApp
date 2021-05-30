import { Container } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Lorem from '../components/LoremIpsum';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        <Lorem/>
        <Lorem/>
      </Container>
      <Footer/>
    </>
  );
}

export default Main;