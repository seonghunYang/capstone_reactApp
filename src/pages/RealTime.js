import {useEffect, useState, useRef} from "react";
import {
  Button,
  Flex,
  Center,
  Stack,
  Text,
  Container,
  CircularProgress,
  CircularProgressLabel,
  ButtonGroup,
  useBreakpointValue,
  Badge,
  VStack,
  Box
} from '@chakra-ui/react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  BeatLoader,
} from "@chakra-ui/react"

import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import RealTimeMapContainer from '../components/realTimeMapContainer';
import {getObservatoryData} from "../actions/index";
import { useDispatch, useSelector } from 'react-redux'

function RealTime() {
  const [userGeolocationPath, setUserGeolocationPath] = useState([]);
  const [operateSystem, setOperateSystem] = useState(false);
  const [riskGrade, setRiskGrade] = useState("D");
  const tide_data = useSelector(state => state.tide_data);
  const marinAccidentPer = useSelector(state => state.marinAccidentPer);
  const pastAccidentPer = useSelector(state => state.pastAccidentPer);
  const location = useSelector(state => state.location);

  const dispatch = useDispatch();
  const timer = useRef(null);
  const pathMemory = useRef([]);

  useEffect(() => {
    if (marinAccidentPer.prediction_ratio >= 70) {
      setRiskGrade("A")
    } else if (marinAccidentPer.prediction_ratio >= 40) {
      setRiskGrade("B")
    } else if (marinAccidentPer.prediction_ratio >= 20) {
      setRiskGrade("C")
    } else {
      setRiskGrade("D")
    }
  }, [marinAccidentPer])

  function handleClickStartButton() {
    setOperateSystem(true)
    timer.current = setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          pathMemory.current = pathMemory.current.concat({
            lat: lat,
            lng: lng
          })
          setUserGeolocationPath(pathMemory.current)
          dispatch(getObservatoryData(lat, lng))
        });
    }, 5000);
  }

  function handleClickStopButton() {
    clearInterval(timer.current)
    setOperateSystem(false)
  }
  return (
    <>
      <TopNav/>
      <Container maxW="container.md">
        <Center p="6">
          <ButtonGroup spacing="6">
            <Button isDisabled={operateSystem} colorScheme="blue" variant="solid" onClick={handleClickStartButton}>Start</Button>
            <Button isDisabled={!operateSystem} colorScheme="blue" variant="outline" onClick={handleClickStopButton}>Stop</Button>
          </ButtonGroup>
        </Center>
        <Stack spacing={{base: '5', md: '20' }} pt={{base: '3', md: '5' }} direction={{ base: 'column', md: 'row' }}>
          <Center>
            <CircularProgress size={{base: "150px", md: "300px"}} value={marinAccidentPer.prediction_ratio} color={marinAccidentPer.prediction_ratio < 40 ? "green.400" : (marinAccidentPer.prediction_ratio < 70 ? "orange.400" : "red.400")}>
              <CircularProgressLabel>{marinAccidentPer.prediction_ratio}%</CircularProgressLabel>
            </CircularProgress>
          </Center>
          <VStack
          spacing="2"
          align="stretch"            
          >
            <Text>위치</Text>
            <Badge>
              {location}
            </Badge>
            <Text>날씨</Text>
            <Badge>
              풍속 {tide_data.wind_speed}m/s | 온도 {tide_data.air_temp}°C | 기압 {tide_data.air_press}hPa 
            </Badge>
            <Text>위험 등급</Text>
            <Badge>
              위험등급 {riskGrade}
            </Badge>
            <Stat>
              <StatLabel>위험률</StatLabel>
              <StatNumber>{marinAccidentPer.prediction_ratio}%</StatNumber>
              <StatHelpText>
                {
                  marinAccidentPer.prediction_ratio - pastAccidentPer.prediction_ratio >= 0 ? 
                  <StatArrow type="increase" />
                  :
                  <StatArrow type="decrease" />
                }
                {marinAccidentPer.prediction_ratio - pastAccidentPer.prediction_ratio}%
              </StatHelpText>
            </Stat>
          </VStack>
        </Stack>
      <Center p="6">
        <RealTimeMapContainer geolocationPath={userGeolocationPath} />
      </Center>
      </Container>
      <Footer/>
    </>
  );
}

export default RealTime;