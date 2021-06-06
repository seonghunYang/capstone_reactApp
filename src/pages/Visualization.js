import { Container, Heading, Center, Stack, Box } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import TestChart from '../components/charts/TestChart';
import VarRaderChart from '../components/VarRaderChart';
import ClusterMap from '../components/VisualizationMap';
import MonthChart from '../components/charts/MonthChart';
import YearChart from '../components/charts/YearChart';

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
        <VarRaderChart/>
        <MonthChart/>
        <YearChart/>
        <Stack>
          <Center>
            <ClusterMap/>
          </Center>
        </Stack>

      </Container>
      <Footer/>
    </>
  );
}

export default Visualization;