import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useToggle', () => {

  it('doit avoir la valeur initiale correcte', () => {
    const { result } = renderHook(() => useToggle('test-key', true));
    expect(result.current[0]).toBe(true);
  });

  it('doit basculer la valeur de false à true', () => {
    const { result } = renderHook(() => useToggle('test-key', false));

    act(() => {
      result.current[1](); 
    });

    expect(result.current[0]).toBe(true);
  });

  it('doit basculer la valeur de true à false', () => {
    const { result } = renderHook(() => useToggle('test-key', true));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
  
  it('doit persister la valeur dans le localStorage', () => {
    const { result } = renderHook(() => useToggle('persistent-key', false));

    act(() => {
      result.current[1]();
    });
    
    expect(window.localStorage.getItem('persistent-key')).toBe('true');
  });
});