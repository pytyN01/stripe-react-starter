import { Button } from "@mantine/core";

export default function StripeButton({ amount }) {
  return (
    <form action={`/api/payment${amount}`} method="POST">
      <Button
        type="submit"
        role="link"
        style={{
          marginTop: "5vh",
          backgroundColor: "black",
        }}
      >
        Donate ${amount}
      </Button>
    </form>
  );
}
