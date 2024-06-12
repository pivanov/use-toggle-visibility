import React, {
  type ComponentType,
  useCallback,
  useMemo,
  useState,
} from 'react';

export type TVisibilityToggle = (e?: React.MouseEvent, openState?: boolean) => void;

export const useToggleVisibility = <T extends object>(
  WrappedComponent: ComponentType<T>,
  initial: boolean = false,
): [ComponentType<T>, TVisibilityToggle, boolean] => {
  const [isVisible, setIsVisible] = useState(initial);

  const toggleVisible = useCallback<TVisibilityToggle>((e, openState) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsVisible((state) => {
      const newState = openState !== undefined ? openState : !state;
      return state !== newState ? newState : state;
    });
  }, []);

  const Component = useMemo(() => {
    return (props: T) => (isVisible ? <WrappedComponent {...props} /> : null);
  }, [WrappedComponent, isVisible]);

  return [Component, toggleVisible, isVisible];
};
