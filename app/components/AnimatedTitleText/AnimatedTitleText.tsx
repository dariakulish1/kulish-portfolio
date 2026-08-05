import { TypeAnimation } from "react-type-animation";
import "./AnimatedTitleText.scss";

export default function AnimatedTitleText({ text }: { text: string }) {
  return (
    <TypeAnimation
        sequence={[
          `${text}`,
          1500,
        ]}
        wrapper="span"
        cursor={false}
        repeat={0}
        className="animated-title-text"
      />
  )
}