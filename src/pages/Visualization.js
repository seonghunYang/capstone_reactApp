import { Container, Heading, Center, Stack, Box, SimpleGrid } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import VarRaderChart from '../components/VarRaderChart';
import ClusterMap from '../components/VisualizationMap';
import MonthChart from '../components/charts/MonthChart';
import YearChart from '../components/charts/YearChart';
import Top3ChartContainer from '../components/Top3ChartContainer';

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
        <ClusterMap/>
        <VarRaderChart/>
        <YearChart/>
        <Top3ChartContainer/> {/* 각 column 별 사고 횟수가 가장 많은 3개 value에 대한 시각화 */}
      </Container>
      <Footer/>
    </>
  );
}

export default Visualization;