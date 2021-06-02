import { Container, Heading, Center, Stack, Box } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import TestChart from '../components/charts/TestChart';
import VarRaderChart from '../components/VarRaderChart';
import ClusterMap from '../components/VisualizationMap';
import VisualizationDashboard from '../components/VisualizationDashboard';

function Visualization() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.lg" mt={50}>
        {/* <Center mb={50}>
          <Heading as="h3" size="lg" isTruncated>
            사고 데이터 시각화
          </Heading>
        </Center>
        <TestChart/>
        <Center >
        <VarRaderChart/>

        </Center>
        <Stack>
          <Center>
            <ClusterMap/>
          </Center>
        </Stack> */}
        <VisualizationDashboard/>
        <Box maxW="2xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" mt={5} mb={5}>
          <Box w="700px" h="100%">
            <ClusterMap/>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </>
  );
}

export default Visualization;
