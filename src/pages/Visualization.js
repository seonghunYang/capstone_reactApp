import { Container, Heading, Center, Stack, Box, SimpleGrid } from '@chakra-ui/react';
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
      <Container maxW="container.lg" >
        <SimpleGrid
        spacing="8"
          columns={{ sm: 2, md: 2 }}
          mt={50} bg="gray.50">
          <Box boxShadow="md" p="6" rounded="md" bg="white">
            md
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            <MonthChart/>
          </Box>
      </SimpleGrid>
      </Container>
        {/* <Center mb={50}>
          <Heading as="h3" size="lg" isTruncated>
            사고 데이터 시각화
          </Heading>
        </Center>
        <VarRaderChart/>
        <YearChart/>
        <Stack>
          <Center>
            <ClusterMap/>
          </Center>
        </Stack> */}

      <Footer/>
    </>
  );
}

export default Visualization;