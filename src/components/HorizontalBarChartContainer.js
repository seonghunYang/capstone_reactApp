import { useState } from 'react';
import { 
  HStack, 
  VStack,
  Button,
  Box 
} from "@chakra-ui/react";
import HorizontalBarChart from './charts/HorizontalBarChart';

export default function HorizontalBarChartContainer() {
  const [type, setType] = useState('wave_period');

  return(
    <Box>
      <VStack >
        <HStack width={{ base: 50, md: 60 }}>
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
        </HStack>
        <Box>
          <HorizontalBarChart type={type}/>
        </Box>
      </VStack>
    </Box>
    
  );
}