import { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { VaultState, NavigationAction } from '../types';

// LocalStorage keys
const STORAGE_KEYS = {
  VISITED_BEFORE: 'prisi_ops_visited_before',
  LAST_SECTION: 'prisi_ops_last_section',
  VISITED_AT: 'prisi_ops_visited_at',
} as const;

// Storage utilities
function loadVaultState(): Partial<VaultState> {
  try {
    const visitedBefore = localStorage.getItem(STORAGE_KEYS.VISITED_BEFORE);
    const lastSection = localStorage.getItem(STORAGE_KEYS.LAST_SECTION);

    if (visitedBefore === 'true') {
      return {
        isUnlocked: true,
        hasEntered: true,
        currentSection: lastSection ? parseInt(lastSection, 10) : 0,
      };
    }
  } catch (error) {
    // Safari private browsing or localStorage unavailable
    console.warn('localStorage unavailable:', error);
  }
  return {};
}

function saveVaultState(updates: { visitedBefore?: boolean; lastSection?: number }) {
  try {
    if (updates.visitedBefore !== undefined) {
      localStorage.setItem(STORAGE_KEYS.VISITED_BEFORE, String(updates.visitedBefore));
      localStorage.setItem(STORAGE_KEYS.VISITED_AT, new Date().toISOString());
    }
    if (updates.lastSection !== undefined) {
      localStorage.setItem(STORAGE_KEYS.LAST_SECTION, String(updates.lastSection));
    }
  } catch (error) {
    // Quota exceeded or localStorage unavailable
    console.warn('Failed to save to localStorage:', error);
  }
}

// Get initial state with localStorage hydration
function getInitialState(): VaultState {
  const persistedState = loadVaultState();
  return {
    isUnlocked: persistedState.isUnlocked ?? false,
    hasEntered: persistedState.hasEntered ?? false,
    currentSection: persistedState.currentSection ?? 0,
    unlockedSections: persistedState.hasEntered ? [persistedState.currentSection ?? 0] : [],
  };
}

// Initial state for the vault (used as fallback)
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
      // Persist visited state when entering
      saveVaultState({ visitedBefore: true });
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
      // Persist last section navigated to
      saveVaultState({ lastSection: clampedSection });
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
    case 'RESET_VAULT':
      // Clear localStorage and return to initial state
      try {
        localStorage.removeItem(STORAGE_KEYS.VISITED_BEFORE);
        localStorage.removeItem(STORAGE_KEYS.LAST_SECTION);
        localStorage.removeItem(STORAGE_KEYS.VISITED_AT);
      } catch (error) {
        console.warn('Failed to clear localStorage:', error);
      }
      return initialState;
    case 'HYDRATE_STATE':
      return {
        ...state,
        ...action.payload,
      };
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
    customInitialState ?? getInitialState()
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

// Custom hook for resetting vault state (useful for testing/debugging)
// eslint-disable-next-line react-refresh/only-export-components
export function useResetVault() {
  const { dispatch } = useVault();
  return () => dispatch({ type: 'RESET_VAULT' });
}

// Check if user has visited before
// eslint-disable-next-line react-refresh/only-export-components
export function hasVisitedBefore(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.VISITED_BEFORE) === 'true';
  } catch {
    return false;
  }
}

// Export reducer for testing - using eslint-disable to allow mixed exports
// This is a common pattern for React Context files
// eslint-disable-next-line react-refresh/only-export-components
export { vaultReducer, initialState, STORAGE_KEYS };
