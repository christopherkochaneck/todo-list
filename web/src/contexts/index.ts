import { createContext, useContext } from 'react';

export function createCtx<T>() {
  const context = createContext<T>(undefined!);

  function useCtx() {
    const ctx = useContext(context);
    if (!ctx) {
      throw new Error('useCtx must be inside a provider with a value');
    }
    return ctx;
  }

  return [useCtx, context.Provider] as const;
}
