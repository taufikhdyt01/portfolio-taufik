import * as React from "react";
import { Image } from "@chakra-ui/react";
import { Badge, Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorMode, Skeleton } from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { TbProgress } from "react-icons/tb";
import PrimaryButton from "./PrimaryButton";
import type { Portfolio } from "@/types";

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
};

type PortfolioModalProps = Portfolio & ModalProps;

export default function PortfolioModal({ title, imageThumbnail, description, livePreviewURL, isOpen, onClose }: PortfolioModalProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "sm", md: "md", lg: "lg", xl: "2xl" }}
      isCentered
    >
      <ModalOverlay
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(1.25rem)"
      />
      <ModalContent backgroundColor="background">
        <ModalHeader>
          <Heading
            size="md"
            fontSize="24px"
          >
            {title}
          </Heading>
        </ModalHeader>

        <ModalCloseButton color="red" />

        <ModalBody
          display="flex"
          flexDirection="column"
          rowGap={5}
        >
          <Box
            borderRadius="md"
            overflow="hidden"
            borderWidth="1.5px"
            borderColor="secondary"
            width="100%"
            height="100%"
          >
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              height={350}
              width={550}
              fallback={<Skeleton height="20rem" />}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </Box>
          <Heading size="md">Description</Heading>
          <Text fontSize={{ base: "0.9em", md: "1rem" }}>{description}</Text>
        </ModalBody>

        <ModalFooter
          justifyContent="flex-start"
          columnGap={3}
        >
          {livePreviewURL === "#" || !livePreviewURL ? (
            <Button
              variant="ghost"
              paddingX={{ base: 2 }}
              cursor="not-allowed"
              color="gray.500"
              rightIcon={<TbProgress />}
            >
              In Progress
            </Button>
          ) : (
            <PrimaryButton
              href={livePreviewURL}
              variant="ghost"
              target="_blank"
              paddingX={{ base: 2 }}
              _hover={{
                borderColor: "text",
                backgroundColor: "text",
                color: colorMode === "dark" ? "primary" : "white",
              }}
              rightIcon={<BsFillEyeFill />}
            >
              Preview
            </PrimaryButton>
          )}
          <Button
            onClick={onClose}
            variant="solid"
            backgroundColor="red.500"
            color="white"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
