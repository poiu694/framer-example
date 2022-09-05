import styled from '@emotion/styled';
import { motion } from 'framer-motion';

function TestFramerComponent() {
  return (
    <TestBox
      className='box'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    />
  );
}

const TestBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fafafa;
`;

export default TestFramerComponent;
