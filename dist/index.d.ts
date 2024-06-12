import React, { type ComponentType } from 'react';
export type TVisibilityToggle = (e?: React.MouseEvent, openState?: boolean) => void;
export declare const useToggleVisibility: <T extends object>(WrappedComponent: ComponentType<T>, initial?: boolean) => [ComponentType<T>, TVisibilityToggle, boolean];
