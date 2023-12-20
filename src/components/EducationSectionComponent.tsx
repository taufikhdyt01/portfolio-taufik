import * as React from "react";
import { motion } from "framer-motion";
import { Badge, Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { MdOutlineSchool } from "react-icons/md";
import { EducationListItem, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { educationList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function EducationSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="educations"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Education Section Title */}
      <SectionTitle title="Educations" />

      {/* Education Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        marginTop={{ base: "1rem", lg: "2.5rem" }}
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "25% 70%" }}
          gap={{ base: 10, lg: "5%" }}
        >
          {/* Education Section Subtitle & Description */}
          <GridItem
            as={motion.div}
            variants={fadeInTransition("right", "tween", 0.2, 0.5)}
          >
            <Flex
              height="100%"
              width="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap={{ base: 3, lg: 5 }}
            >
              <SectionSubtitle>Educations🎓</SectionSubtitle>

              <SectionDescription>There are some formal education</SectionDescription>
            </Flex>
          </GridItem>

          {/* Education Section Educations Content */}
          <GridItem
            backgroundColor="card"
            shadow="lg"
            borderRadius="lg"
            padding={10}
            width={{ base: "90%", lg: "100%" }}
            marginX={{ base: "auto", lg: 0 }}
            order={{ base: 2, lg: 1 }}
            transition="all 300ms"
            _hover={{
              shadow: "2xl",
            }}
          >
            <Grid
              width="100%"
              height="100%"
              templateColumns={{ base: "1fr", lg: "repeat(1, 1fr)" }} 
              gap={{ base: "4rem", lg: 8 }} 
            >
              {/* Education Section Educations Content */}
              <GridItem
                as={motion.div}
                variants={fadeInTransition("left", "tween", 0.2, 1.1)}
                gridColumn={{ base: "1", lg: "1 / span 2" }}
              >

                <Box marginTop={8}>
                  {educationList.map(
                    ({ school, competence, years, schoolLogo }, index): React.ReactNode => (
                      <EducationListItem
                        key={`${school} - ${index}`}
                        school={school}
                        competence={competence}
                        years={years}
                        schoolLogo={schoolLogo} // Kirim properti schoolLogo ke komponen EducationListItem
                      />
                    )
                  )}
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(EducationSectionComponent, "educations");
