import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BioSection, BioYear } from "../components/Layout/bio";
import Header from "../components/Layout/header";
import Paragraph from "../components/Layout/paragraph";
import Section from "../components/Layout/section/section";
import NextLink from "../components/Utils/NextLink";
import Layout from "../components/Layout/article";
import { Meta } from "../components/Utils/TitleLink";
import { SkillBadge, SkillSection } from "../components/Layout/Skills";

export default function HomeApp() {
  return (
    <Layout>
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
          <Paragraph>I&apos;m studying more and more so I can get my first job as a web developer.
          </Paragraph>
        </Section>
        <Section delay={1.2}>
          <Heading as="h3" variant="section-title">Projects</Heading>
          <Paragraph>
            Look at my projects or my 
            <Link href="https://github.com/PedroVictor022" target="_blank"> Github</Link>
          </Paragraph>
          <Box align="center" my={4}>
            {/* PROJETOS */}
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('red', 'teal')}>My Projects</Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={1.4}>
          <Heading as="h3" variant="section-title">Skills</Heading>
          
          <SkillSection>
            <SkillBadge text="HTML" color1="orange" color2="yellow"/>
            <SkillBadge text="CSS" color1="cyan" color2="blue"/>
            <SkillBadge text="Javascript" color1="yellow" color2="yellow"/>
            <SkillBadge text="ReactJS" color1="teal" color2="teal"/>
            <SkillBadge text="NextJS" color1="pink" color2="purple"/>
            <SkillBadge text="Typescript" color1="blue" color2="cyan"/>
            <SkillBadge text="NodeJS" color1="green" color2="green"/>
            <SkillBadge text="Firebase" color1="orange" color2="orange"/>
          </SkillSection>
        </Section>

        <Section delay={1.6}>
          <Heading as="h3" variant="section-title">Bio</Heading>
          <BioSection>
            <BioYear>2019</BioYear>
            I started to study programming with Python, I made some programs to solve math and physics formulas.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Finished high school and started to program websites with JavaScript, a language I had liked to play with.
            From there I decided that I would be a WEB developer and that I would have as a plan to become a professional in the area.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Year I joined the Brazilian army and stayed for eleven months
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started my degree in Systems Analysis and Development in PUC.
          </BioSection>
        </Section>

        <Section delay={2}>
          <Heading as="h3" variant="section-title">Contact</Heading>
          <Paragraph>Feel free to contact me for any work or suggestions below </Paragraph>
          <Box p={4}>
            <Meta>EMAIL</Meta><Link>pedro20002victor@gmail.com</Link> <br />
            <Meta>LINKEDIN</Meta><Link href="https://www.linkedin.com/in/pedro-victor-75440321a/" target="_blank">Pedro Victor</Link> <br />
            <Meta>INSTAGRAM</Meta><Link href="https://www.instagram.com/borgess022/" target="_blank">@borges022</Link><br />
            <Meta>WHATSAPP</Meta><Link>+55 31 99950-6062</Link>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
