'use client'
import React, { useEffect, useRef } from 'react'
import { AppStore, store } from './app/store';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';

interface Props {
    children: React.ReactNode;
}

function ReduxProvider({children}: Props) {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = store;
      }
      useEffect(() => {
        if (storeRef.current != null) {
          const unsubscribe = setupListeners(storeRef.current.dispatch);
          return unsubscribe;
        }
      }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}

export default ReduxProvider
