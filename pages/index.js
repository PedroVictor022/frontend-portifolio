import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BioSection, BioYear } from "../components/Layout/bio";
import Header from "../components/Layout/header";
import Paragraph from "../components/Layout/paragraph";
import Section from "../components/Layout/section/section";
import NextLink from "../components/Utils/NextLink";

export default function HomeApp() {
  return (
    <Container>
      <Section delay={0.5}>
        <Header />
      </Section>
      <Section delay={0.8}>
        <Heading variant="section-title">About</Heading>
        <Paragraph>Hello my name is Pedro Victor, I&apos;m front-end developer</Paragraph>
        <Paragraph>
          Currently attending the 2nd period of Systems Analysis and Development in Pontifical Catholic University of Minas Gerais.
        </Paragraph>
        <Paragraph>I&apos;m studying more and more so I can get my first job as a web developer. {" "}<NextLink href="/about">
          <Link>Read More</Link>
        </NextLink>
        </Paragraph>
      </Section>
      <Section delay={1.2}>
        <Heading as="h3" variant="section-title">Projects</Heading>
        <Paragraph>
          Look at my projects
        </Paragraph>
        <Box align="center" my={4}>
          {/* PROJETOS */}
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('red', 'green')}>My Projects</Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={1.6}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          I started to study programming with Python, I made some programs to solve math and physics formulas.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          I finished high school and started to program websites with JavaScript, a language I had liked to play with.
          From there I decided that I would be a WEB developer and that I would have as a plan to become a professional in the area.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Year I joined the Brazilian army and stayed for eleven months
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <strong>To present</strong> - I started my degree in Systems Analysis and Development.
        </BioSection>
      </Section>
    </Container>
  )
}
