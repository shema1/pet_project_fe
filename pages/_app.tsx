import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from "../store";
import '../styles/globals.css'
import { RouteGuard } from '../components/RouteGuard';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
    <RouteGuard>
        <Component {...pageProps} />
    </RouteGuard>
);

export default wrapper.withRedux(WrappedApp);