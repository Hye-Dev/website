import TeamHeader from "@/components/TeamHeader";
import { Avatar, Flex, SimpleGrid, Title, Text, Container, ActionIcon, BackgroundImage, TextInput, Textarea, Box, Button } from "@mantine/core";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";

function TeamMember({ name, title, imageSource, bio, x, instagram, linkedin }: { name: string, title: string, imageSource: string, bio: string }) {
    return (
        <Flex direction="column" mx="auto">
            <Avatar mx="auto" src={imageSource} alt="it's me" size="xl" />
            <Title mx="auto" mt="sm">{name}</Title>
            <Text mx="auto" size="lg">{title}</Text>
            <SimpleGrid cols={x ? 3 : 2} mx="auto">
                <ActionIcon mx="auto" onClick={() => window.open(instagram)}>
                    <IconBrandInstagram />
                </ActionIcon>
                <ActionIcon mx="auto" onClick={() => window.open(linkedin)}>
                    <IconBrandLinkedin />
                </ActionIcon>
                {x ?
                    <ActionIcon mx="auto" onClick={() => window.open(x)}>
                        <IconBrandX />
                    </ActionIcon>
                    : ""}
            </SimpleGrid>
            <Text mx="auto" mt="lg" align="center">{bio}</Text>
        </Flex>
    )
}

export default function Team() {
    return (
        <>
            <TeamHeader />
            <Container>
                <Flex>
                    <Title mx="auto" mt={30}>
                        Our Team
                    </Title>
                </Flex>
                <SimpleGrid cols={2} mt="lg">
                    <TeamMember name="Joseph Maldjian" title="UTDSG Freshman Senate Candidate" imageSource="/josephMaldjian.png" bio="Hello, I'm Joseph! I'm half Armenian, and I'm super into tech, business, and politics. I have my own business that develops cloud infrastructure management solutions, and in my free time I love working on that. I love UT Dallas, and I'm committed to improving it through real policies that improve your everyday life!" instagram="https://www.instagram.com/josephmaldjian/" x="comingsoon" linkedin="https://www.linkedin.com/in/joseph-maldjian-b92b4328b/" />
                    <TeamMember name="Ishita Sharma" title="Movement Manager" imageSource="/ishitaSharma.JPG" bio="Hello everyone! My name is Ishita Sharma and I’m a Freshman at The University of Texas at Dallas. Some things about me are that I enjoy playing tennis, guitar, and hanging out with friends. I am thrilled to work with y’all to make the school a better place!" instagram="https://instagram.com/ishitash04?igshid=NzZhOTFlYzFmZQ==" linkedin="https://www.linkedin.com/in/ishita-sharma-3b809428b
" />
                </SimpleGrid>
            </Container>
            <BackgroundImage src="/water.jpg" mt={80} mb={-120}>
                <div style={{ backdropFilter: "blur(5px) brightness(70%)", WebkitBackdropFilter: "blur(5px) brightness(70%)" }}>
                    <Container >

                        <Flex direction="column">
                            <Title mx="auto" mt="lg">
                                Join The Movement
                            </Title>
                            <Text mx="auto">Help make UT Dallas Better</Text>
                            <Box mx="auto" mb={30} style={{ minWidth: "30vw" }}>
                                <TextInput mx="auto" mt="sm" placeholder="Full Name" label="Full Name" />

                                <TextInput mx="auto" mt="sm" placeholder="UT Dallas Student Email" label="Email" />
                                <Textarea autosize placeholder="Tell us about yourself" mt="sm" mx="auto" label="Tell us about yourself" />
                                <Textarea autosize placeholder="Why do you want to join our movement?" mt="sm" mx="auto" label="Why do you want to join our movement?" />
                                <Flex>
                                <ReCAPTCHA style={{marginTop: 10}} sitekey="6Lfe8AooAAAAAE5RDVp0Zimh2OVY_F2V5g1X4suG" onChange={(e) => console.log(e)} />
                                    <Button mt="sm" ml="auto" my="auto">Apply</Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>
                </div>
            </BackgroundImage>


        </>
    )
}