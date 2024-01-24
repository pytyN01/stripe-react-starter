import { Center, Text, Accordion, Button } from "@mantine/core";
import { CurrencyDollar } from "tabler-icons-react";
import { useState } from "react";

const StripeButton = ({ amount, note }) => (
  <form action={`/api/payment${amount}`} method="POST">
    <Button type="submit" role="link" className="StripeButton">
      {`donate $${amount} = ${note}`}
    </Button>
  </form>
);

export default function Home() {
  const donateOptions = [
    { amount: 5, note: "1 reinvigorating beverage" },
    { amount: 10, note: "1 revitalizing snack" },
    { amount: 20, note: "1 month of chatGPT fees" },
    { amount: 30, note: "1 replenishing meal" },
    { amount: 40, note: "1 year of domain fees" },
    { amount: 50, note: "1 month of internet fees" },
    { amount: 100, note: "1 year of storage fees" },
    { amount: 1000, note: "1 life changing amount of money" },
  ];

  const [value, setValue] = useState(false);

  return (
    <>
      <Center>
        <Text
          className="StripeTitle"
          component="span"
          align="center"
          size="xl"
          weight={700}
        >
          _ourBooks Donation App
        </Text>
      </Center>
      <Center>
        <Accordion
          transitionDuration={1500}
          iconSize={20}
          value={value}
          onChange={setValue}
        >
          <Accordion.Item
            label="select a donation option"
            value="AccordionItem"
            className="AccordionItem"
            icon={
              <CurrencyDollar
                className={`${
                  !value && "animate__animated animate__tada animate__infinite"
                }`}
              />
            }
          >
            {donateOptions.map(({ amount, note }) => (
              <StripeButton key={note} amount={amount} note={note} />
            ))}
          </Accordion.Item>
        </Accordion>
      </Center>
    </>
  );
}
