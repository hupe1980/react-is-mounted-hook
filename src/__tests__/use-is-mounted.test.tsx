import { renderHook } from 'react-hooks-testing-library';

import useIsMounted from '../use-is-mounted';

describe('useIsMounted', () => {
  it('should return a boolean indicating if the component is still mounted', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current()).toBeTruthy();
    unmount();
    expect(result.current()).toBeFalsy();
  });
});
