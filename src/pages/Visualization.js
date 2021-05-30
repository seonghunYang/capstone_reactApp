import { Container } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Lorem from '../components/LoremIpsum';
import Footer from '../components/Footer';
import TestChart from '../components/charts/TestChart';

function Main() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        <TestChart/>
      </Container>
      <Footer/>
    </>
  );
}

export default Main;
