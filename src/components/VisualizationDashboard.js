import { Stack, HStack, VStack, Box } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';
import DashboardItem from './DashboardItem';
import Testchart from './charts/TestChart';

export default function VisualizationDashboard() {
  
  return(
    <>
      <HStack mb={5}>
        <DashboardItem/>
        <DashboardItem/>
        <Stack spacing={5}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" >
            <Box p="6" w="400px" h="160px">TEST</Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
            <Box p="6" w="400px" h="160px">TEST</Box>
          </Box>
        </Stack>
      </HStack>
      <HStack>
          <Box maxW="2xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg" >
            <Box p="6" w="1500px" h="250px">TEST</Box>
          </Box>
          <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
            <Box w="950px" h="250px">
              <Testchart/>
            </Box>
          </Box>
      </HStack>
    </>
    
  );
}