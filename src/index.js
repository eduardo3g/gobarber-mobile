import React from 'react';
import CodePush from 'react-native-code-push';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

// export default function Index() {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
//         <App />
//       </PersistGate>
//     </Provider>
//   );
// }
// test
const Index = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <App />
    </PersistGate>
  </Provider>
);

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
