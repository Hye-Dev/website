import { Group, Avatar, Text, Accordion, Paper, TextInput, Textarea, Button, Flex } from '@mantine/core';
import { IconBus, IconGift, IconPlugConnected, IconUser, IconUserHeart, IconWifi } from '@tabler/icons-react';
import { useState } from 'react';
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha";

const charactersList = [
  {
    id: 'internet',
    label: 'Better Internet',
    description: 'In our digital age, every student needs access to fast and reliable internet',
    content: "Right now, the slow and unreliable internet in our residence halls is making it difficult for Comets to get their work done. We need internet that helps, rather than hurts, student productivity. I will use my position in student government to advocate for more reliable internet service, and faster internet speeds.",
  },

  {
    id: 'cabs',
    label: 'Comet Cabs',
    description: "It's a struggle to get between classes in this Texas heat",
    content: "Before the COVID-19 pandemic, UT Dallas had Comet Cabs that students could track with the UT Dallas app, and just hop on and get where they needed to go. I will push to bring back the Comet Cab service, making it easier for Comets to get around campus.",
  },
  {
    id: "power",
    label: "More Power Outlets",
    description: "There aren't enough outlets on campus to charge our devices",
    content: "Many students go to places like Starbucks to study in a casual environment, but then are suprised to find that there are not any power outlets available for them to charge their devices, often cutting their study session short. I will work to bring more power outlets to campus, so that students can study for as long as they need to."
  },
  {
    id: 'reps',
    label: "Representatives, Not Politicians",
    description: 'We need people who are here to serve the students, not themselves',
    content: 'We need charismatic and ethical leaders who truly represent the people. Leaders who are not all talk and no action. We need leaders who promote policies that improve the lives of every comet.',
  },
  {
    id: 'gifts',
    label: "A Better Welcome",
    description: `Let's face it: the welcome gifts are a joke`,
    content: 'The welcome bags we recieve as freshman seem more like an advertisement for CVS than something welcoming us to our new homes. Why not throw in a pack of Skittles? I will work toward enhancing our welcome gifts so newcomers feel valued and at home from the beginning.',
  },
  {
    id: "listen",
    label: "Representatives That Listen To You",
    description: `We need representatives that are easy to reach and are willing to listen to students`,
    content: "We need representatives that listen to the feedback of students. That's why I have this form right here, where you can directly contact me about anything, whether it's a policy proposal, a complaint, or just a question. I am your voice, and a voice is no good if it does not listen."
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}


function AccordionLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
        {label == "Better Internet" ?       <IconWifi color="teal" /> : ""}
        {label == "Comet Cabs" ? <IconBus color="#ECE3A1" /> : ""}
        {label == "Representatives, Not Politicians" ? <IconUser color="darkred" /> : ""}
        {label == "A Better Welcome" ? <IconGift color="darkgreen" /> : ""}
        {label == "Representatives That Listen To You" ? <IconUserHeart color="pink" /> : ""}
        {label == "More Power Outlets" ? <IconPlugConnected color="lightgreen" /> : ""}
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export default function PoliciesAccordion() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [captchaKey, setCaptchaKey] = useState("");
    const [sent, setSent] = useState(false)
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
        {!sent ?
        <>
        {item.label == "Representatives That Listen To You" ? 
        <>
       <TextInput onChange={(e) => setFullName(e.target.value)} mt="lg" placeholder="Full Name" variant="filled" />
       <TextInput onChange={(e) => setEmail(e.target.value)} mt="lg" placeholder="Student Email Address" variant="filled" />
       <Textarea onChange={(e) => setMessage(e.target.value)} variant='filled' placeholder="Your Message" mt="lg" autosize />
       <Flex mt="lg">
       <ReCAPTCHA sitekey="6Lfe8AooAAAAAE5RDVp0Zimh2OVY_F2V5g1X4suG" onChange={(e) => setCaptchaKey(e)} />
       </Flex>
       <Flex>
       <Button loading={submitting} mt="md" ml="auto" onClick={async () => {
        setSubmitting(true);
        if (fullName == "") {
            alert("Please enter your full name")
            setSubmitting(false);
            return;
        }
        if (!email.includes("@utdallas.edu") ) {
            alert("Please enter a valid UT Dallas email address")
            setSubmitting(false);
            return;
        }
        if (message == "") {
            alert("Please enter a message")
            setSubmitting(false);
            return;
        }
        if (captchaKey == "") {
            alert("Please complete the captcha")
            setSubmitting(false);
            return;
        }
        emailjs.init("IA7eZpbXqrffdfwVf");
        await emailjs.send("service_9kpy1xq", "template_coqej1c", {
            from_name: fullName,
            message: message,
            reply_to: email,
            "g-recaptcha-response": captchaKey
        })
        setSubmitting(false)
        setSent(true)
       }}>Submit</Button>
       </Flex>
       </>
        : ""}
        </>
        : item.label == "Representatives That Listen To You" ? <Text color="lime" mt="lg">Your message has been sent successfully! Joseph will get back to you as soon as possible!</Text> : ""}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return(
    <Paper mt="lg" mb="80px" mx="auto" style={{width: "50vw"}}>
     <Accordion  style={{width: "50vw"}} mx="auto" chevronPosition="right">{items}</Accordion>
     </Paper>
  )
}