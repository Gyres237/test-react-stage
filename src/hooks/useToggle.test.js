import { renderHook, act } from '@testing-library/react'; 
import { useToggle } from './useToggle';

describe('useToggle', () => {

  it('doit avoir la valeur initiale correcte', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it('doit basculer la valeur de false à true', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  it('doit basculer la valeur de true à false', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});