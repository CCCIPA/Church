import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import LoadingButton from "../components/ui/loading-button";
import { Loader2 } from "lucide-react";

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const serviceId = process.env.YOUR_SERVICE_ID;
  const templateId = process.env.YOUR_TEMPLATE_ID;
  const publicKey = process.env.YOUR_PUBLIC_KEY;

  const [sendingMessage, setsendingMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState("Sending Message");

  // const { animations, animationIndex, setAnimationIndex } =
  //   useCharacterAnimations();

  const handleClickButton = () => {
    setTimeout(() => setsendingMessage(true), 100);
    setTimeout(() => setSentMessage("Message Sent"), 1000);
    setTimeout(() => setsendingMessage(false), 2000);
    setSentMessage("Sending Message")
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4p8xn2f",
        "template_k8amhxy",
        form.current,
        "mgFSWNDe65KdNr6Qr",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const buttonClass = `${
    sentMessage==="Message Sent" ? "bg-green-500" : ""
  } hidden`;

  return (
    <form ref={form} onSubmit={sendEmail} >
      <Label>Name</Label>
      <Input type="text" name="to_name" placeholder="Optional" />
      <Label>Email</Label>
      <Input type="email" name="from_name" placeholder="Optional" />
      <Label>Message</Label>
      <Textarea name="message" placeholder="Don't hold back, your feedback is valuable to me." />
      <Button
        type="submit"
        value="Send"
        className=""
        disabled={sendingMessage}
        onClick={handleClickButton}
      >
        {sendingMessage ? (
          <>
            <Loader2 className={"mr-2 h-4 w-4 animate-spin"} />
            {sentMessage}
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
