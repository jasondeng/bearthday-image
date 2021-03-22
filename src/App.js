import React from 'react';
import { ChakraProvider, Box, Text, Grid, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Text>Hello World</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
