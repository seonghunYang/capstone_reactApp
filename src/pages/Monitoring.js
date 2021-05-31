import { Container } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Map from '../components/Map';
import Footer from '../components/Footer';

function Monitoring() {

  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        <Map/>
      </Container>
      <Footer/>
    </>
  );
}

export default Monitoring;