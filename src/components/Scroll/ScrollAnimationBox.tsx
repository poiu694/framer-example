import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function ScrollAnimationBox({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <Wrapper initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }}>
      <Splash background={background} />
      <Card variants={cardVariants}>{emoji}</Card>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -130px;
`;

const Splash = styled.div<{ background: string }>`
  ${({ background }) => css`
    background: ${background};
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 0;
    top: 0;
    transform: translateX(-50%);
    clip-path: path(
      'M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z'
    );
  `}
`;

const Card = styled(motion.div)`
  font-size: 164px;
  width: 300px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
  transform-origin: 10% 60%;
`;

export default ScrollAnimationBox;
