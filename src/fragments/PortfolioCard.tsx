import * as React from "react";
import { Badge, Button, Box, ButtonGroup, Card, CardBody, CardFooter, Center, Flex, Heading, Image, Link, Skeleton, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsArrowRightCircleFill, BsFillEyeFill } from "react-icons/bs";
import { TbProgress } from "react-icons/tb";
import PrimaryButton from "./PrimaryButton";
import PortfolioModal from "./PortfolioModal";
import type { Portfolio } from "@/types";

type PortfolioCardProps = Portfolio;

export default function PortfolioCard({ title, imageThumbnail, description, livePreviewURL, repositoryURL }: PortfolioCardProps): React.JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <Card
        backgroundColor="card"
        transition="all 300ms"
        role="group"
        shadow="md"
        _hover={{
          shadow: "xl",
        }}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          rowGap={4}
        >
          <Box
            borderRadius="md"
            overflow="hidden"
            borderWidth="1.5px"
            borderColor="secondary"
            position="relative"
          >
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              transition="all 300ms"
              fallback={<Skeleton height="13rem" />}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </Box>

          <Heading
            as={Link}
            href={livePreviewURL}
            target="_blank"
            size="md"
            fontSize="1.5rem"
            transition="all 300ms"
            _hover={{
              color: "primary",
              textDecoration: "none",
            }}
          >
            {title}
          </Heading>
          <Text noOfLines={2}>{description}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup>
            <PrimaryButton
              onClick={onOpen}
              variant="solid"
              paddingX={{ base: 2 }}
              rightIcon={<BsArrowRightCircleFill />}
            >
              Details
            </PrimaryButton>
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
          </ButtonGroup>
        </CardFooter>
      </Card>

      <PortfolioModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={title}
        imageThumbnail={imageThumbnail}
        description={description}
        livePreviewURL={livePreviewURL}
        repositoryURL={repositoryURL}
      />
    </React.Fragment>
  );
}
