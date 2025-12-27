import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { VaultProvider, useVault, hasVisitedBefore } from './context/VaultContext';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { VaultDoor } from './components/VaultDoor';
import { VaultInterior } from './components/VaultInterior';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import './App.css';

/**
 * VaultExperience Component
 * 
 * Handles the conditional rendering between VaultDoor and VaultInterior
 * based on the vault state (unlocked, entered).
 */
function VaultExperience() {
  const { state, dispatch } = useVault();

  // Check if user has visited before
  const isReturningVisitor = useMemo(() => {
    return hasVisitedBefore();
  }, []);

  const handleUnlock = () => {
    dispatch({ type: 'UNLOCK' });
  };

  const handleEnter = () => {
    dispatch({ type: 'ENTER' });
  };

  const handleNavigate = (section: number) => {
    dispatch({ type: 'NAVIGATE', payload: section });
  };

  // Placeholder profile image - will be replaced with actual image
  const profileImageSrc = 'https://api.dicebear.com/7.x/avataaars/svg?seed=PrisiOps&backgroundColor=2d2d2d';

  return (
    <>
      <AnimatePresence mode="wait">
        {!state.hasEntered ? (
          <VaultDoor
            key="vault-door"
            profileImageSrc={profileImageSrc}
            onUnlock={handleUnlock}
            onEnter={handleEnter}
            isUnlocked={state.isUnlocked}
            isReturningVisitor={isReturningVisitor}
          />
        ) : (
          <VaultInterior
            key="vault-interior"
            currentSection={state.currentSection}
            onNavigate={handleNavigate}
          />
        )}
      </AnimatePresence>

      {/* Case Study Detail Routes */}
      <Routes>
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      </Routes>
    </>
  );
}

/**
 * App Component
 *
 * Root component that provides the VaultContext and renders the vault experience.
 */
function App() {
  return (
    <ThemeProvider>
      <VaultProvider>
        <div className="min-h-screen theme-transition" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
          <ThemeToggle />
          <VaultExperience />
        </div>
      </VaultProvider>
    </ThemeProvider>
  );
}

export default App;
