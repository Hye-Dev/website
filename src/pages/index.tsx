import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PoliciesAccordion from "@/components/PoliciesAccordion";
import { ActionIcon, BackgroundImage, Button, Center, Container, Flex, Image, Overlay, SimpleGrid, Text, Title } from "@mantine/core";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
    <Header />
    <Flex direction="column" mt="30px">
    <Title mx="auto" mt="lg">Our Movement</Title>
    </Flex>
    <Container mb="80px">
    <Flex direction='row'>
    <SimpleGrid cols={2} mt="lg">
      <Text>For too long, politicians in our student government have focused on the issues that impact the few, while the average Comet has been ignored. That all changes starting with this great movement. This movement represents a shift to implementing policies that improve the quality of Comets everyday life. Every decision made on residential life, on transportation, on academics, and on social affairs will be made to benefit this great student body. We do not seek to take away from the few, but rather to make every Comet's voice have a place in our student government. Working together, we will implement real policies that enhance your everyday life.</Text>
      <Image mx="auto" radius="md" src="./utdSky.jpg" alt="UT Dallas Sky View" />
      </SimpleGrid>
    </Flex>
    </Container>
    <BackgroundImage  src="/visitorsCenter.jpg" mt="lg">
      <div style={{backdropFilter: "brightness(30%) blur(5px)", WebkitBackdropFilter: "brightness(30%) blur(5px)"}}>
  <Center>
    <Flex direction="column">
  <Title mx="auto" mt="50px">I Am Your Voice</Title>
  <Text mx="auto" align="center">Here are some policies we are working on that we think will make your life better</Text>
  <PoliciesAccordion />
  </Flex>
  </Center>
      </div>
  </BackgroundImage>
  <Title mx="auto" mt="80px" align="center">Stay Up To Date With Joseph</Title>
  <Text align="center">Follow Joseph on social media to get the latest information on this great movement</Text>
  <Container mb="-30px">
  <SimpleGrid cols={2} mt="lg">
    <Flex direction="column">
      <IconBrandInstagram onClick={() => window.open("http://instagram.com/josephmaldjian/")} style={{marginRight: "auto", marginLeft: "auto", cursor: "pointer"}} size="100px" />
      <Text align="center">Instagram</Text>
      </Flex>
      <Flex direction="column">
      <IconBrandX style={{marginRight: "auto", marginLeft: "auto"}} size="100px" />
      <Text align="center">X {"(Coming Soon)"}</Text>
      </Flex>      

  </SimpleGrid>
  </Container>

      </>
  )
}
