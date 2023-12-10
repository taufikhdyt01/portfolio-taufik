import * as React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { BiCalendar } from "react-icons/bi";
import type { Education } from "@/types";

type EducationListItemProps = Education;

export default function EducationListItem({
  school,
  competence,
  years,
  schoolLogo,
}: EducationListItemProps): React.JSX.Element {
  return (
    <Flex alignItems="center" justifyContent="space-between"> 
      <Flex direction="column" flex={1} rowGap={2} paddingBottom={4}>
        <Text as="h3" fontWeight="bold" fontSize="1.2em"> 
          {school}
        </Text>
        <Text as="h4" fontWeight="medium">
          {competence}
        </Text>
        <Text
          as="h5"
          color="secondary"
          display="inline-flex"
          alignItems="center"
          columnGap={2}
          fontSize="0.9em"
        >
          <BiCalendar /> {years}
        </Text>
      </Flex>
      <Box marginLeft="auto"> 
      <Image src={schoolLogo} alt={`${school} Logo`} boxSize="auto" height="80px" maxWidth="100%" /> 
      </Box>
    </Flex>
  );
}
