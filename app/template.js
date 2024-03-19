import { MotionDiv } from "@/components/MotionElements/MotionDiv";

export default function Template({ children }) {
  return (
    <MotionDiv
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </MotionDiv>
  );
}
