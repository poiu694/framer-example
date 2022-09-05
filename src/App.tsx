import { Global, ThemeProvider } from '@emotion/react';
import { theme, globalStyle } from './styles';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
