import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { useStore } from "../store";
import '../styles/globals.css'
import { RouteGuard } from '../components/RouteGuard';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })
    return (<Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
            <RouteGuard>
                <>
                    <ToastContainer />
                    <Component {...pageProps} />
                </>
            </RouteGuard>
        </PersistGate>
    </Provider >
    )
};

export default WrappedApp