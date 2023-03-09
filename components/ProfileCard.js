import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const ProfileCard = ({
  nameDisplay,
  schoolYearDisplay,
  sheetNameDisplay,
  lrnDisplay,
  gradeDisplay,
}) => {
  switch (sheetNameDisplay.toLowerCase()) {
    case "kepler":
    case "pasteur":
    case "schwann":
      gradeDisplay = "12";
      break;
    default:
      gradeDisplay = "";
      break;
  }

  return (
    <Box
      bg="white"
      px={4}
      py={7}
      rounded="xl"
      boxShadow="xl"
      w={300}
      border={"2px"}
      borderColor={"blue.600"}>
      <Flex direction={"column"} align={"center"} mb={"2rem"}>
        <Image
          borderRadius="full"
          boxSize="90px"
          objectFit="cover"
          src="https://www.ccair.org/wp-content/uploads/2015/04/wallpaper-for-facebook-profile-photo-e1440624505574.jpg"
          alt="Dan Abramov"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Flex>
      <VStack spacing={2} align="flex-start">
        <Text>{`Name: ${nameDisplay}`}</Text>
        <Text>{`LRN: ${lrnDisplay}`}</Text>
        <Text>{`School Year: ${schoolYearDisplay}`}</Text>
        <Text>{`Grade: ${gradeDisplay}`}</Text>
        <Text>{`Section: ${sheetNameDisplay}`}</Text>
      </VStack>
    </Box>
  );
};

export default ProfileCard;