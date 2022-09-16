import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ScrollAnimationBoxList } from '../components';

function ScrollAnimationPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Layout>
      <ProgressBar style={{ scaleX }} />
      <ScrollAnimationBoxList />
    </Layout>
  );
}

const Layout = styled.main`
  ${({ theme }) => css`
    width: 100%;
    overflow-y: hidden;
    background-color: ${theme.palette.orange200};
  `}
`;

const ProgressBar = styled(motion.div)`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: ${theme.colors.primary.red};
    z-index: 100;
  `}
`;

export default ScrollAnimationPage;
