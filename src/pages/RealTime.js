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
  VStack
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
  const tide_data = useSelector(state => state.tide_data);
  const weather_data = useSelector(state => state.weather_data);
  const marinAccidentPer = useSelector(state => state.marinAccidentPer);
  const pastAccidentPer = useSelector(state => state.pastAccidentPer);
  const location = useSelector(state => state.location);

  const dispatch = useDispatch();
  const timer = useRef(null);
  const pathMemory = useRef([]);
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
          // pathMemory.current = [
          //   {
          //     lat: 37.4845377,
          //     lng: 127.05075719999999
          //   },
          //   {
          //     lat: 37.485,
          //     lng: 127.06
          //   },
          //   {
          //     lat: 37.487,
          //     lng: 127.04
          //   },
          // ]
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
            <CircularProgress size={{base: "150px", md: "300px"}} value={40} color="green.400">
              <CircularProgressLabel>{marinAccidentPer}%</CircularProgressLabel>
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
              풍속 5m/s | 파고 2m/s | 기압 900hPa 
            </Badge>
            <Text>위험 정도</Text>
            <Badge>
              위험등급 C
            </Badge>
            <Stat>
              <StatLabel>사고 확률</StatLabel>
              <StatNumber>{marinAccidentPer}%</StatNumber>
              <StatHelpText>
                {
                  marinAccidentPer - pastAccidentPer >= 0 ? 
                  <StatArrow type="increase" />
                  :
                  <StatArrow type="decrease" />
                }
                {marinAccidentPer - pastAccidentPer}%
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