import { useState } from 'react';

// components
import { ChakraProvider, Box, Text, theme, Button } from '@chakra-ui/react';
import { BirthdayPicker, ImageSlider } from './components';

// utils
import { getImagesForDayOrClosestDay } from './utils/api';
import { getImageUrl } from './utils/helpers';

function App() {
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [imageUrls, setImageUrls] = useState([]);

  const handleDayChange = (day: Date) => {
    setSelectedDay(day);
  };

  const handleSubmit = () => {
    if (selectedDay) {
      getImagesForDayOrClosestDay(selectedDay).then(data => {
        setImageUrls(data.map(item => getImageUrl(item.image, selectedDay)));
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        alignItems="center"
        justifyItems="center"
      >
        <Text>
          What's your birthday? Lets see what the earth looked like on your last
          birthday!
        </Text>
        <BirthdayPicker handleDayChange={handleDayChange} />
        <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
          Submit
        </Button>
        {imageUrls.length > 0 && <ImageSlider images={imageUrls} />}
      </Box>
    </ChakraProvider>
  );
}

export default App;
