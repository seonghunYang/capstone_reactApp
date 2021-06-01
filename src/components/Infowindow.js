import { Box } from "@chakra-ui/react";


export default function infowindow({tide, bu}) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {tide.result.meta.obs_post_name}
      </Box>
      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          위도 : 
        </Box>
        {tide.result.meta.obs_lat}
      </Box>
      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          경도 : 
        </Box>
        {tide.result.meta.obs_lon}
      </Box>
      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          wave_hight??(tide) : 
        </Box>
        {tide.result.data.wave_hight}
      </Box>
      <Box>
        <Box as="span" color="gray.600" fontSize="sm">
          wave_height(bu) : 
        </Box>
        {bu.result.data.wave_height}
      </Box>
    </Box>
    
  );
}