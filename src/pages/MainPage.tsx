import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { RefreshButton, TestFramerComponent } from '../components';

function MainPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <MainLayout>
      <RefreshButton onClick={() => setCount(() => count + 1)} />
      <TestFramerComponent />
    </MainLayout>
  );
}

const MainLayout = styled.main`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.orange200};
  `}
`;

export default MainPage;
