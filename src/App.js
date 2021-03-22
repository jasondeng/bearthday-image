import { useState, useEffect } from 'react';

// components
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import { BirthdayPicker } from './components';

// utils
import { getImagesForDay } from './utils/api';
import { getImageUrl } from './utils/helpers';

function App() {
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (selectedDay) {
      getImagesForDay(selectedDay).then(data => {
        setImageUrls(data.map(item => getImageUrl(item.image, selectedDay)));
      });
    }
  }, [selectedDay]);

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
