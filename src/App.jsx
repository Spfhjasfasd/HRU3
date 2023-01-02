import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Rectangle1 from 'src/components/Rectangle1/Rectangle1';
import Desktop1 from 'src/components/Desktop1/Desktop1';
import Team from 'src/components/Team/Team';
import Goals from 'src/components/Goals/Goals';
import Welcome from 'src/components/Welcome/Welcome';
import Presale from 'src/components/Presale/Presale';
import Roadmap from 'src/components/Roadmap/Roadmap';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="x" element={<Rectangle1 />} />
          <Route path="x2" element={<Desktop1 />} />
          <Route path="Team" element={<Team />} />
          <Route path="Goals" element={<Goals />} />
          <Route path="Welcome" element={<Welcome />} />
          <Route path="Presale" element={<Presale />} />
          <Route path="Roadmap" element={<Roadmap />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
