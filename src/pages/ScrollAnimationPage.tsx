import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, useScroll } from 'framer-motion';
import { ScrollAnimationBoxList } from '../components';

function ScrollAnimationPage() {
  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      <ProgressBar className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <ScrollAnimationBoxList />
    </Layout>
  );
}

const Layout = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
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
    transform-origin: 0%;
  `}
`;

export default ScrollAnimationPage;
