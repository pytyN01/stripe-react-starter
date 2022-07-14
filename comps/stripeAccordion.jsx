import StripeButton from "./stripeButton";

import { Accordion } from "@mantine/core";
import { CurrencyDollar } from "tabler-icons-react";

export default function StripeAccordion() {
  return (
    <Accordion transitionDuration={1500} iconSize={20}>
      <Accordion.Item
        style={{ textAlign: "center" }}
        label="select a donation option below"
        icon={<CurrencyDollar />}
      >
        {/* Changes */}
        <StripeButton amount="5" />
        <StripeButton amount="10" />
        <StripeButton amount="20" />
        <StripeButton amount="30" />
        <StripeButton amount="40" />
        <StripeButton amount="50" />
        <StripeButton amount="100" />
      </Accordion.Item>
    </Accordion>
  );
}
