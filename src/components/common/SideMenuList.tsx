import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

function SideMenuList({ children }: PropsWithChildren) {
  return (
    <SideMenuUl
      variants={{
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
      }}
    >
      {children}
    </SideMenuUl>
  );
}

const SideMenuUl = styled(motion.ul)`
  ${({ theme }) => css`
    position: absolute;
    top: 100px;
    left: 12px;
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.lg}px;
    z-index: ${theme.zIndex.header};
  `}
`;

export default SideMenuList;
