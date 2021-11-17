import { useReducer } from 'react';
import { ContextApp, initialState, profileReducer } from '../reducers';
import '../styles/globals.css';
import '../styles/dragon.css';

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <Component {...pageProps} />
    </ContextApp.Provider>
  );
}

export default MyApp;
