import { Container, Center } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Map from '../components/Map';
import Footer from '../components/Footer';

function Monitoring() {

  return (
    <>
      <TopNav/>
      <Container maxW="container.md" mt={50}>
        <Center p="6">
          <Map/>
        </Center>
      </Container>
      <Footer/>
    </>
  );
}

export default Monitoring;