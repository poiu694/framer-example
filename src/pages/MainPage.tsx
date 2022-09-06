import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { RefreshButton, TestFramerComponent } from '../components';

function MainPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <MainLayout>
      <RefreshButton onClick={() => setCount(() => count + 1)} />
      <Circle />
    </MainLayout>
  );
}

const MainLayout = styled.main`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.orange200};
  `}
`;

const Circle = styled(TestFramerComponent)`
  position: fixed;
  top: 50%;
  right: 50%;
`;

export default MainPage;
