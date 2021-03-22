import React from 'react';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';

import { BirthdayPicker } from './components';

function App() {
  const [selectedDay, setSelectedDay] = React.useState(undefined);

  const handleDayChange = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>
          What's your birthday? Lets see what the earth looked like on your last
          birthday!
        </Text>
        <BirthdayPicker handleDayChange={handleDayChange} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
