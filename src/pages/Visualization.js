import { Container, GridItem, Heading,List, ListItem, ListIcon, Stack, Box, Grid, Text } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import VarRaderChart from '../components/VarRaderChart';
import ClusterMap from '../components/VisualizationMap';
import MonthChart from '../components/charts/MonthChart';
import YearChart from '../components/charts/YearChart';
import HorizontalBarChartContainer from '../components/HorizontalBarChartContainer';
import { PhoneIcon, AddIcon, CheckCircleIcon } from '@chakra-ui/icons'

function Visualization() {
  return (
    <>
      <TopNav/>
      <Container maxW="container.xl" mt={20} mb={20}>
        <Grid
          h="900px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={10}
        >
          <GridItem boxShadow="lg" rowSpan={2} colSpan={3} borderRadius="20">
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7" mb="5">
              <Text as={'span'}>Variable Info</Text>
            </Heading>
            <HorizontalBarChartContainer/>
          </GridItem>
          <GridItem boxShadow="lg" colSpan={4} rowSpan={2} borderRadius="20" >
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5">
              <Text as={'span'}>Effect Variable</Text>
            </Heading>
            <VarRaderChart/>
            <List fontSize="md" ml="12" mt="3" fontWeight="bold" spacing={3}>
              <ListItem as={'span'}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                풍속 : 1.2
              </ListItem>
              <ListItem as={'span'} ml="10" >
                <ListIcon as={CheckCircleIcon} color="green.500" />
                기압 : 1.1
              </ListItem>
              <br/>
              <br/>
              <ListItem as={'span'} >
                <ListIcon as={CheckCircleIcon} color="green.500" />
                습도 : 0.8
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem as={'span'}  ml="10" >
                <ListIcon as={CheckCircleIcon} color="green.500" />
                기온 : 0.9
              </ListItem>
              <br/>
              <br/>
              <ListItem as={'span'} >
                <ListIcon as={CheckCircleIcon} color="green.500" />
                파고 : 1.8
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem as={'span'}  ml="10" >
                <ListIcon as={CheckCircleIcon} color="green.500" />
                파주기 : 0.5
              </ListItem>
            </List>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" colSpan={5}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5">
              <Text as={'span'}>Accident Trend</Text>
            </Heading>
            <YearChart/>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" rowSpan={2} colSpan={5}>
          <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5" >
              <Text as={'span'}>Accident Cluster</Text>
            </Heading>
            <ClusterMap/>
          </GridItem>
          <GridItem borderRadius="20" boxShadow="lg" rowSpan={1} colSpan={7}>
            <Heading fontSize={{ base: 'xl', md: 'xl' }} mt="10" ml="7"  mb="5" >
              <Text as={'span'}>Montly Accident</Text>
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