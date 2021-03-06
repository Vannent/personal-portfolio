import Layout from "../components/Layout";
import { StateContext } from "../context/StateContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
