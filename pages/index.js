import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Layout/header";
import Paragraph from "../components/Layout/paragraph";
import Section from "../components/Layout/section/section";
import NextLink from "../components/Utils/NextLink";

export default function HomeApp() {
  return (
    <Container>
      <Header />
      <Section delay={1}>
        <Heading>About</Heading>
        <Paragraph>Hello I&apos;m Pedro Victor, front-end developer, from in Sete Lagoas, MG, Brazil. I&apos;m seeking out a job from junior web developer. </Paragraph>
        <Paragraph>At the moment studying Analysis and Systems Development in Pontifical Catholic University of Minas Gerais.{' '}
          <NextLink href="/about">
            <Link>Read More</Link>
          </NextLink>
        </Paragraph>
      </Section>
      <Section delay={10}>
        <Heading>Projects</Heading>
        <Paragraph>
          Here my projects 
        </Paragraph>
        <Box align="center" my={4}>
          {/* PROJETOS */}
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('red', 'green')}>My Projects</Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}
