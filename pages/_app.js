import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import { createStore } from "redux";

function MyApp({ Component, pageProps }) {
	//const store = createStore(reducer);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
