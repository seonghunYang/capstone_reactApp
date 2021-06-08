import { useEffect, useState } from 'react';
import { 
  Stack,
  HStack, 
  VStack,
  Button,
  Box 
} from "@chakra-ui/react";
import Top3Chart from '../components/charts/Top3Chart';
import top3Data from '../data/top3Data.json';

export default function Top3ChartContainer() {
  const [type, setType] = useState('wave_period');

  return(
    <HStack width={{ base: 10 ,md: 40 }}>
      <Box>
        <Top3Chart type={type}/>
      </Box>
      <VStack>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('wave_period')}}>
          파주기
        </Button>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('wave_height')}}>
          파고
        </Button>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('temperature')}}>
          기온
        </Button>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('humidity')}}>
          습도
        </Button>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('air_press')}}>
          기압
        </Button>
        <Button colorScheme="teal" variant="outline" size="xs" onClick={() => {setType('wind_speed')}}>
          풍속
        </Button>
      </VStack>
    </HStack>
  );
}