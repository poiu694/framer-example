import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '../components';

function MainPage() {
  return (
    <Layout>
      <Typography type='h5'>hi</Typography>
    </Layout>
  );
}

const Layout = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.orange200};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default MainPage;
