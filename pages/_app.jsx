import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import ScrollTopButton from "../components/ScrollTopButton";
import AuthProvider from "../components/AuthProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ScrollTopButton />
    </AuthProvider>
  );
}
