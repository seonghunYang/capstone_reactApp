import {useEffect, useState, useRef} from "react";
import { useToast } from "@chakra-ui/react"
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
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner
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
import {getObservatoryData, getDemoData} from "../actions/index";
import { useDispatch, useSelector } from 'react-redux'

const testData = [
  {
    lng: 124.949100,
    lat: 33.81820,
    water_temp: 22.10,
    wind_spd: 6.4,
    temp: 22.2,
    ats_pres: 996.4,
    humid: 79,
    max_wave_h: 5.2,
    sig_wave_h: 3.1,
    avg_wave_h: 2.2,
    wave_cycle: 9.1,
  },
  {
    lng: 125.256259,
    lat: 34.2531994,
    water_temp: 21.8,
    wind_spd: 4.4,
    temp: 22.0,
    ats_pres: 996.4,
    humid: 85,
    max_wave_h: 4.3,
    sig_wave_h: 2.8,
    avg_wave_h: 2,
    wave_cycle: 9.1,
  },
  {
    lng: 124.907600,
    lat: 34.641920,
    water_temp: 21.5,
    wind_spd: 6.9,
    temp: 21.9,
    ats_pres: 996,
    humid: 77,
    max_wave_h: 4.2,
    sig_wave_h: 2.7,
    avg_wave_h: 1.9,
    wave_cycle: 9.1,
  },
  {
    lng: 125.2141412,
    lat: 34.8827061,
    water_temp: 21.5,
    wind_spd: 5.5,
    temp: 21.9,
    ats_pres: 995.9,
    humid: 73,
    max_wave_h: 4.4,
    sig_wave_h: 2.7,
    avg_wave_h: 1.9,
    wave_cycle: 8,
  },
  {
    lng: 125.1058576,
    lat: 34.9015451,
    water_temp: 21.5,
    wind_spd: 7.6,
    temp: 21.9,
    ats_pres: 995.9,
    humid: 77,
    max_wave_h: 3.4,
    sig_wave_h: 2.4,
    avg_wave_h: 1.7,
    wave_cycle: 10.7,
  },
  {
    lng: 125.082400,
    lat: 35.127350,
    water_temp: 21.5,
    wind_spd: 4.6,
    temp: 21.8,
    ats_pres: 999.5,
    humid: 75,
    max_wave_h: 4.2,
    sig_wave_h: 2.6,
    avg_wave_h: 1.9,
    wave_cycle: 9.1,
  },
  {
    lng: 125.1629442,
    lat: 35.4181657,
    water_temp: 20.6,
    wind_spd: 10.3,
    temp: 18.1,
    ats_pres: 990.2,
    humid: 72,
    max_wave_h: 4,
    sig_wave_h: 2.6,
    avg_wave_h: 2.3,
    wave_cycle: 7.1,
  },
  {
    lng: 124.9979929,
    lat: 35.7653439,
    water_temp: 21.5,
    wind_spd: 11.1,
    temp: 22.2,
    ats_pres: 985.9,
    humid: 72,
    max_wave_h: 3.7,
    sig_wave_h: 3.0,
    avg_wave_h: 2.7,
    wave_cycle: 6.3,
  },
  {
    lng: 124.5300,
    lat: 36.0900,
    water_temp: 21.2,
    wind_spd: 13.1,
    temp: 22,
    ats_pres: 980.4,
    humid: 69,
    max_wave_h: 6.1,
    sig_wave_h: 4.3,
    avg_wave_h: 3.3,
    wave_cycle: 6.4,
  }
]


function RealTime() {
  const [userGeolocationPath, setUserGeolocationPath] = useState([]);
  const [operateSystem, setOperateSystem] = useState(false);
  const [riskGrade, setRiskGrade] = useState("D");
  const [alertColor, setAlertColor] = useState(null);
  const [isOpen, setIsOpen] = useState(false)
  const [isOver, setIsOver] = useState(false);
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()
  const tide_data = useSelector(state => state.tide_data);
  const marinAccidentPer = useSelector(state => state.marinAccidentPer);
  const pastAccidentPer = useSelector(state => state.pastAccidentPer);
  const location = useSelector(state => state.location);

  const dispatch = useDispatch();
  const toast = useToast()

  const timer = useRef(null);
  const demoIdx = useRef(0);
  const pathMemory = useRef([]);
  const alerttimer = useRef(null);
  const alert = useRef(null);
  const accident = useRef(null);

  useEffect(() => {
    accident.current = marinAccidentPer.prediction_ratio
    if (marinAccidentPer.prediction_ratio >= 75) {
      setIsOpen(true)
      setRiskGrade("A")
    } else if (marinAccidentPer.prediction_ratio >= 70) {
      setRiskGrade("A")
      setTimeout(() => {
        toast({
          title: `날씨가 매우 좋지 않습니다. 위험하오니 조속히 철수 하시길 바랍니다.`,
          status: "error",
          isClosable: true,
        })
      }, 2000)
    } else if (marinAccidentPer.prediction_ratio >= 60) {
      toast({
        title: `날씨가 좋지 않습니다. 선박 운행에 주의하시길 바랍니다.`,
        status: "warning",
        isClosable: true,
      })
      setRiskGrade("B")
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
      if(demoIdx.current == 9){
        setIsOver(true);
        clearInterval(timer.current);
      }
      else{
        const lat = testData[demoIdx.current].lat
        const lng = testData[demoIdx.current].lng
        pathMemory.current = pathMemory.current.concat({
          lat: lat,
          lng: lng
        })
        setUserGeolocationPath(pathMemory.current)
        dispatch(getDemoData(testData[demoIdx.current]))
        demoIdx.current = demoIdx.current + 1
      }
      
        // navigator.geolocation.getCurrentPosition((position) => {
        //   const lat = position.coords.latitude;
        //   const lng = position.coords.longitude;
          // pathMemory.current = pathMemory.current.concat({
          //   lat: lat,
          //   lng: lng
          // })
        //   setUserGeolocationPath(pathMemory.current)
        //   dispatch(getObservatoryData(lat, lng))
        // });
    }, 5000);

    alerttimer.current = setInterval(()=> {
      if (accident.current >= 70) {
        if (!alert.current) {
          setAlertColor("red.500")
          alert.current = "red.500"
        }else {
          setAlertColor(null)
          alert.current = null
        }
      }
    }, 1250)
  }

  function handleClickStopButton() {
    clearInterval(timer.current)
    setOperateSystem(false)
  }
  return (
    <>
      <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                WARNING Message
              </AlertDialogHeader>

              <AlertDialogBody>
                날씨가 좋지 않아 매우 위험합니다. 조속히 철수하시길 바랍니다
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Sure
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      <TopNav/>
      <Container maxW="container.xl" bg={alertColor}>
      <Container maxW="container.md">
        <Center p="6">
          <ButtonGroup spacing="6">
            {!isOver &&
              <>
                <Button isDisabled={operateSystem} colorScheme="blue" variant="solid" onClick={handleClickStartButton}>Start</Button>
                <Button isDisabled={!operateSystem} colorScheme="blue" variant="outline" onClick={handleClickStopButton}>Stop</Button>
              </>
            }
            {isOver &&
              <>
                <Button isDisabled={true} colorScheme="blue" variant="solid" onClick={handleClickStartButton}>---</Button>
                <Button isDisabled={true} colorScheme="blue" variant="outline" onClick={handleClickStopButton}>---</Button>
              </>
            }
          </ButtonGroup>
        </Center>
        <Stack spacing={{base: '5', md: '20' }} pt={{base: '3', md: '5' }} direction={{ base: 'column', md: 'row' }}>
          <Center>
            <CircularProgress size={{base: "150px", md: "300px"}} value={marinAccidentPer.prediction_ratio} color={marinAccidentPer.prediction_ratio < 40 ? "green.400" : (marinAccidentPer.prediction_ratio < 70 ? "orange.400" : "red.400")}>
              {!isOver &&
                <CircularProgressLabel>{marinAccidentPer.prediction_ratio}%</CircularProgressLabel>
              }
              {isOver &&
                <CircularProgressLabel>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="black"
                    size="xl" />
                </CircularProgressLabel> 
              }
              
            </CircularProgress>
          </Center>
          <VStack
          spacing="2"
          align="stretch"            
          >
            <Text>위치</Text>
            {!isOver &&
              <Badge>
                {location}
              </Badge>
            }
            {isOver &&
              <Badge>
                ------
              </Badge>
            }
            <Text>날씨</Text>
            {!isOver &&
              <Badge>
                풍속 {tide_data.wind_speed}m/s | 온도 {tide_data.air_temp}°C | 기압 {tide_data.air_press}hPa 
              </Badge>
            }
            {isOver &&
              <Badge>
                풍속 ---m/s | 온도 ---°C | 기압 ---hPa 
              </Badge>
            }
            <Text>위험 등급</Text>
            {!isOver &&
              <Badge>
                위험등급 {riskGrade}
              </Badge>
            }
            {isOver &&
              <Badge>
                위험등급 ---
              </Badge>
            }
            <Stat>
              <StatLabel>위험률</StatLabel>
              {!isOver &&
                <>
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
                </>
              }
              {isOver &&
                <>
                  <StatNumber>
                    <Spinner
                      size="sm"
                    /> %
                  </StatNumber>
                  <StatHelpText>
                    {
                      marinAccidentPer.prediction_ratio - pastAccidentPer.prediction_ratio >= 0 ? 
                      <StatArrow type="increase" />
                      :
                      <StatArrow type="decrease" />
                    }
                    --- %
                  </StatHelpText>
                </>
              }
            </Stat>
          </VStack>
        </Stack>
      <Center p="6">
        <RealTimeMapContainer geolocationPath={userGeolocationPath} />
      </Center>
      </Container>
      </Container>
      <Footer/>
    </>
  );
}

export default RealTime;