import { Container, GridItem, Heading, Stack, Box, Grid, Text } from '@chakra-ui/react';
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
      <Container maxW="container.xl" >
        <Grid
          h="900px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={10}
        >
          <GridItem boxShadow="lg" rowSpan={2} colSpan={3} borderRadius="20">
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7" mb="5">
              <Text as={'span'}>Effect Variable</Text>
            </Heading>
          </GridItem>
          <GridItem boxShadow="lg" colSpan={4} borderRadius="20" >
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5">
              <Text as={'span'}>Effect Variable</Text>
            </Heading>
            <VarRaderChart/>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" colSpan={5}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5">
              <Text as={'span'}>Accident Trend</Text>
            </Heading>
            <YearChart/>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" colSpan={4}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5" >
              <Text as={'span'}>Effect Variable</Text>
            </Heading>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" rowSpan={2} colSpan={5}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="5" ml="7" mb="5">
              <Text as={'span'}>Accident Cluster</Text>
            </Heading>
            <ClusterMap/>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" rowSpan={1} colSpan={7}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5" >
              <Text as={'span'}>Accident Cluster</Text>
            </Heading>
            <MonthChart />
          </GridItem>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}
        {/* </SimpleGrid>
        <ClusterMap/>
        <VarRaderChart/>
        <YearChart/>
        <Top3ChartContainer/> 각 column 별 사고 횟수가 가장 많은 3개 value에 대한 시각화 */}

export default Visualization;