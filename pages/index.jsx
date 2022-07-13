import StripeAccordion from "../comps/StripeAccordion";
import { Center, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Center>
        <Text
          component="span"
          align="center"
          size="xl"
          weight={700}
          style={{
            fontFamily: "Greycliff CF, sans-serif",
            paddingTop: "5vh",
            fontSize: "8vw",
          }}
        >
          Stripe.js Payment App
        </Text>
      </Center>
      <Center>
        <StripeAccordion />
      </Center>
    </>
  );
}
