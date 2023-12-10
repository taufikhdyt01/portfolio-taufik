import * as React from "react";
import { motion } from "framer-motion";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { PortfolioCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { portfolioList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function PortfolioPageSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="portfolio"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Portfolio Page Section Title */}
      <SectionTitle title="Projects" />

      {/* Portfolio Page Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Portfolio Page Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>All Project I&apos;ve Created💼</SectionSubtitle>
          <SectionDescription>During my time at the college, I have worked on several projects that are interesting and relevant to my field of study.</SectionDescription>
        </Flex>

        {/* Portfolio Page Section Content Container */}
        <Grid
          as={motion.div}
          variants={fadeInTransition("left", "tween", 0, 1)}
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {portfolioList.map(
            ({ title, imageThumbnail, description, livePreviewURL, repositoryURL }, index): React.ReactNode => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
                <PortfolioCard
                  title={title}
                  imageThumbnail={imageThumbnail}
                  description={description}
                  livePreviewURL={livePreviewURL}
                  repositoryURL={repositoryURL}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Portfolio Page Section Redirect Button */}
        <Center
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.5, 1.1)}
          marginTop={20}
        >
          <PrimaryButton
            href="/#portfolio"
            variant="solid"
            paddingX={8}
            paddingY={6}
            rightIcon={<BsArrowRightCircleFill fontSize={20} />}
          >
            Back To Section
          </PrimaryButton>
        </Center>
      </Container>
    </Box>
  );
}

export default SectionLayout(PortfolioPageSectionComponent, "portfolio");
