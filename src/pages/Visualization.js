import { Container, Heading, Center, Stack } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import ClusterMap from '../components/VisualizationMap';
import NonClusterMap from '../components/VisualizationMap(NoCluster)';

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
        <Stack>
          <Center>
            <ClusterMap/>
          </Center>
          <Center>
            <NonClusterMap/>
          </Center>
        </Stack>
      </Container>
      <Footer/>
    </>
  );
}

export default Visualization;
