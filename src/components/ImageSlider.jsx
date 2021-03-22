import React, { useState } from 'react';

import { Box, Image, IconButton, HStack, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const isDisabled = images.length === 1;

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <Box
      maxW="lg"
      alignItems="center"
      borderRadius="sm"
      padding="8"
      margin="auto"
      justifyItems="center"
    >
      <Image src={images[index]} alt="Image" />
      <HStack spacing="12px" justifyContent="center">
        <IconButton
          onClick={slideLeft}
          isDisabled={isDisabled}
          icon={<ChevronLeftIcon />}
        />
        <IconButton
          onClick={slideRight}
          isDisabled={isDisabled}
          icon={<ChevronRightIcon />}
        />
        <Text>
          Picture {index + 1} of {images.length + 1}
        </Text>
      </HStack>
    </Box>
  );
};
