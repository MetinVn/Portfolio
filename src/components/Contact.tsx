import { Container } from "../layouts/Container";

export default function Contact() {
  return (
    <Container topRightCorner={true} bottomLeftCorner={true} padding="p-8" textCenter={true}>
      <h1 className="text-4xl font-bold text-whiteF mb-6">Contact</h1>
      <p className="text-lg text-accentGray">
        I'd love to hear from you! You can reach me at{" "}
        <a href="mailto: misaxanli@gmail.com" className="text-orange hover:underline">
          misaxanli@gmail.com
        </a>
      </p>
    </Container>
  );
}
