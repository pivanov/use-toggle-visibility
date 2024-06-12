import React, { useCallback, useMemo, useState, } from 'react';
export const useToggleVisibility = (WrappedComponent, initial = false) => {
    const [isVisible, setIsVisible] = useState(initial);
    const toggleVisible = useCallback((e, openState) => {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        e === null || e === void 0 ? void 0 : e.stopPropagation();
        setIsVisible((state) => {
            const newState = openState !== undefined ? openState : !state;
            return state !== newState ? newState : state;
        });
    }, []);
    const Component = useMemo(() => {
        return (props) => (isVisible ? React.createElement(WrappedComponent, Object.assign({}, props)) : null);
    }, [WrappedComponent, isVisible]);
    return [Component, toggleVisible, isVisible];
};
