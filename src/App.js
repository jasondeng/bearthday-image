import { useState } from 'react';

// components
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { BirthdayPicker, ImageSlider } from './components';

// utils
import { getImagesForClosestDay, getImagesForDay } from './utils/api';
import { getImageUrl, getLastBirthday, formatDay } from './utils/helpers';

function App() {
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBearthday, setIsBearthday] = useState(undefined);

  const handleDayChange = day => {
    setSelectedDay(day);
  };

  const setImageUrlsFromData = data => {
    setImageUrls(
      data.map(item => getImageUrl(item.image, getLastBirthday(selectedDay)))
    );
  };

  const handleSubmit = () => {
    if (selectedDay) {
      setIsLoading(true);

      const lastBirthday = getLastBirthday(selectedDay);

      getImagesForDay(lastBirthday).then(data => {
        if (data.length > 0) {
          setIsBearthday(true);
          setImageUrlsFromData(data);
        } else {
          setIsBearthday(false);
          getImagesForClosestDay(lastBirthday).then(data => {
            setImageUrlsFromData(data);
          });
        }

        setIsLoading(false);
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
          When's your birthday? Lets see what the earth looked like on your last
          birthday!
        </Text>
        <BirthdayPicker handleDayChange={handleDayChange} />
        <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
          Submit
        </Button>
        <Box>
          {isLoading ? (
            <Spinner size="xl" />
          ) : imageUrls.length > 0 ? (
            <ImageSlider images={imageUrls} />
          ) : null}
        </Box>
        <Text>
          {typeof isBearthday === 'boolean'
            ? isBearthday
              ? `Here's your bearthday on ${formatDay(
                  getLastBirthday(selectedDay)
                )}!!`
              : "There's no imagine for your bearthday! :( Hold on while we look for the closest image to it!"
            : null}
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
