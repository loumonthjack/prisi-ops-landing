import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { VaultState, NavigationAction } from '../types';

// Initial state for the vault
const initialState: VaultState = {
  isUnlocked: false,
  hasEntered: false,
  currentSection: 0,
  unlockedSections: [],
};

// Reducer function to handle vault state transitions
function vaultReducer(state: VaultState, action: NavigationAction): VaultState {
  switch (action.type) {
    case 'UNLOCK':
      return {
        ...state,
        isUnlocked: true,
      };
    case 'ENTER':
      return {
        ...state,
        hasEntered: true,
        unlockedSections: state.unlockedSections.includes(0)
          ? state.unlockedSections
          : [...state.unlockedSections, 0],
      };
    case 'NAVIGATE': {
      const sectionIndex = action.payload;
      // Clamp to valid range (handled by consumer, but defensive here)
      const clampedSection = Math.max(0, sectionIndex);
      return {
        ...state,
        currentSection: clampedSection,
        // Unlock the section if not already unlocked
        unlockedSections: state.unlockedSections.includes(clampedSection)
          ? state.unlockedSections
          : [...state.unlockedSections, clampedSection],
      };
    }
    case 'UNLOCK_SECTION': {
      const sectionToUnlock = action.payload;
      if (state.unlockedSections.includes(sectionToUnlock)) {
        return state;
      }
      return {
        ...state,
        unlockedSections: [...state.unlockedSections, sectionToUnlock],
      };
    }
    default:
      return state;
  }
}

// Context type including dispatch
interface VaultContextType {
  state: VaultState;
  dispatch: React.Dispatch<NavigationAction>;
}

// Create the context
const VaultContext = createContext<VaultContextType | undefined>(undefined);

// Provider component
interface VaultProviderProps {
  children: ReactNode;
  initialState?: VaultState;
}

export function VaultProvider({ children, initialState: customInitialState }: VaultProviderProps) {
  const [state, dispatch] = useReducer(
    vaultReducer,
    customInitialState ?? initialState
  );

  return (
    <VaultContext.Provider value={{ state, dispatch }}>
      {children}
    </VaultContext.Provider>
  );
}

// Custom hook for consuming the context
// eslint-disable-next-line react-refresh/only-export-components
export function useVault() {
  const context = useContext(VaultContext);
  if (context === undefined) {
    throw new Error('useVault must be used within a VaultProvider');
  }
  return context;
}

// Export reducer for testing - using eslint-disable to allow mixed exports
// This is a common pattern for React Context files
// eslint-disable-next-line react-refresh/only-export-components
export { vaultReducer, initialState };
