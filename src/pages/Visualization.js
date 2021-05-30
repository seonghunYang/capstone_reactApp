import { Container, Heading, Center } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Lorem from '../components/LoremIpsum';
import Footer from '../components/Footer';
import TestChart from '../components/charts/TestChart';

function Visualization() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        <Center mb={50}>
          <Heading as="h3" size="lg" isTruncated>
            사고 데이터 시각화
          </Heading>
        </Center>
        <TestChart/>
      </Container>
      <Footer/>
    </>
  );
}

export default Visualization;
