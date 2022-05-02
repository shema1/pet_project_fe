// create a makeStore function
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import { reducer, RootState } from "./reducers";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from '@reduxjs/toolkit'
import { playerReducer } from "./reducers/playerReducer";
import { trackReducer } from "./reducers/trackReducer";
import { authReducer } from "./reducers/authReducer";

// const makeStore: MakeStore<Store<RootState>>
//   = (context: Context) => createStore(reducer, applyMiddleware(logger));

const makeStore: MakeStore<Store<RootState>>
  = (context: Context) => configureStore({
    reducer: {
      player: playerReducer,
      track: trackReducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {}
  });


// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
