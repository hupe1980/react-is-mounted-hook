import { renderHook } from 'react-hooks-testing-library';

import useIsMounted from '../use-is-mounted';

describe('useIsMounted', () => {
  it('should return true if component is mounted', () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current()).toBe(true);
  });

  it('should return false if component is unmounted', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    unmount();
    expect(result.current()).toBe(false);
  });

  it('should be defined', () => {
    expect(useIsMounted).toBeDefined();
  });
});
