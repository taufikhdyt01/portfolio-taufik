import * as React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import type { WorkExperience } from "@/types";

type ExperienceCardProps = WorkExperience;

export default function ExperienceCard({
  jobDesk,
  companyName,
  years,
  jobDescription,
  companyLogo,
}: ExperienceCardProps): React.JSX.Element {
  const jobDescriptionList = jobDescription.split(";");
  return (
    <Box
      height={{ base: "100%", sm: "35rem", lg: "35rem" }}
      backgroundColor="card"
      shadow="2xl"
      borderRadius="xl"
      padding={10}
      borderBottomWidth="2px"
      borderColor="primary"
      maxWidth="40rem"
    >
      <Flex
        direction="column"
        rowGap={4}
      >
        <Flex
          direction="column"
          rowGap={2}
        >
          <Heading>{companyName}</Heading>
          <Flex alignItems="center" columnGap={4} marginTop={2}>
            <Box maxHeight={200} maxWidth={200} >
              <Image src={companyLogo} alt="Company Logo" height={200} width={200}/>
            </Box>
          </Flex>
          <Text fontWeight="semibold" color="primary">
            {jobDesk}
          </Text>
        </Flex>

        <Text color="secondary">{years}</Text>

        <UnorderedList textAlign="justify">
          {jobDescriptionList.map((item, index) => (
            <ListItem key={`${jobDesk}-description-${index}`}>{item.trim()}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  );
}
