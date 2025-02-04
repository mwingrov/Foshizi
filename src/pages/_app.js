import "@/styles/global.css";
import { Provider } from 'react-redux';
import store from '../components/base/store/store';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
