import * as React from "react";
import { motion } from "framer-motion";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SectionDescription, SectionSubtitle, SectionTitle, ExperienceCard } from "@/fragments";
import { workExperienceList, organizationalExperienceList} from "@/constants";
import {  } from "@/constants/organizationalExperience";
import SectionLayout from "@/layouts/SectionLayout";
import "swiper/css/navigation";
import "swiper/css";
import { fadeInTransition, staggeredContainer } from "@/utils";

function ExperienceSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="experiences"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Experience Section Title */}
      <SectionTitle title="Experiences" />

      {/* Experience Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Experience Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Work Experiences⌛</SectionSubtitle>
          <SectionDescription>I have had valuable opportunities to broaden my horizons through various work experiences during my studies</SectionDescription>
        </Flex>

        {/* Experience Section Work Experiences Container */}
        <Box
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.2, 1.2)}
          marginTop={12}
          paddingBottom={16}
        >
          {/* Experience Section Work Experiences Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              365: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            style={{ paddingBottom: 64 }}
            grabCursor
          >
            {/* Experience Section Work Experiences Slider Content */}
            <Box>
              {workExperienceList.map(
                ({ jobDesk, companyName, years, jobDescription, companyLogo }, index): React.ReactNode => (
                  <SwiperSlide key={`${jobDesk} - ${index}`}>
                    <ExperienceCard
                      jobDesk={jobDesk}
                      companyName={companyName}
                      years={years}
                      jobDescription={jobDescription}
                      companyLogo={companyLogo}
                    />
                  </SwiperSlide>
                )
              )}
            </Box>
            {/* Experience Section Work Experiences Navigation Button */}
            <Box>
              <BsChevronRight className="swiper-button-next" />
              <BsChevronLeft className="swiper-button-prev" />
            </Box>
          </Swiper>
        </Box>
        {/* Organizational Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Organizational & Committee Experiences⌛</SectionSubtitle>
          <SectionDescription>During my college time, I was actively involved in various organizations and committees</SectionDescription>
        </Flex>

        {/* Experience Section Organizational Experiences Container */}
        <Box
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.2, 1.2)}
          marginTop={12}
          paddingBottom={16}
        >
          {/* Experience Section Organizational Experiences Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              365: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            style={{ paddingBottom: 64 }}
            grabCursor
          >
            {/* Experience Section Organizational Experiences Slider Content */}
            <Box>
              {organizationalExperienceList.map(
                ({ jobDesk, companyName, years, jobDescription, companyLogo }, index): React.ReactNode => (
                  <SwiperSlide key={`${jobDesk} - ${index}`}>
                    <ExperienceCard
                      jobDesk={jobDesk}
                      companyName={companyName}
                      years={years}
                      jobDescription={jobDescription}
                      companyLogo={companyLogo}
                    />
                  </SwiperSlide>
                )
              )}
            </Box>
            {/* Experience Section Organizational Experiences Navigation Button */}
            <Box>
              <BsChevronRight className="swiper-button-next" />
              <BsChevronLeft className="swiper-button-prev" />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default SectionLayout(ExperienceSectionComponent, "experiences");
