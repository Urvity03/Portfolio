import React from 'react';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { IntroSection } from './components/sections/IntroSection';
import { SelectedWork } from './components/sections/SelectedWork';
import { OpenSource } from './components/sections/OpenSource';
import { DigitalGarden } from './components/sections/DigitalGarden';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Journey } from './components/sections/Journey';
import { Toolkit } from './components/sections/Toolkit';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { NowSection } from './components/sections/NowSection';
import { ContactSection } from './components/sections/ContactSection';
import { SpatialSection } from './components/layout/SpatialSection';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-canvas text-ink font-sans selection:bg-sakura-light selection:text-sakura-deep">

        {/* Global Minimalist Navigation (Understated, Native Resume PDF Tab) */}
        <Navbar />

        {/* Main Spatial Fluid Editorial Flow with Camera Transitions */}
        <main className="relative z-10 scene-perspective" style={{ perspective: 1200 }}>
          <SpatialSection isHero>
            <HeroSection />
          </SpatialSection>

          <SpatialSection>
            <IntroSection />
          </SpatialSection>

          <SpatialSection>
            <SelectedWork />
          </SpatialSection>

          <SpatialSection>
            <OpenSource />
          </SpatialSection>

          <SpatialSection>
            <DigitalGarden />
          </SpatialSection>

          <SpatialSection>
            <ExperienceSection />
          </SpatialSection>

          <SpatialSection>
            <Journey />
          </SpatialSection>

          <SpatialSection>
            <Toolkit />
          </SpatialSection>

          <SpatialSection>
            <CertificationsSection />
          </SpatialSection>

          <SpatialSection>
            <NowSection />
          </SpatialSection>

          <SpatialSection>
            <ContactSection />
          </SpatialSection>
        </main>

        {/* Persistent Editorial Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
