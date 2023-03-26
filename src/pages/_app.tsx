import "@/styles/globals.css";
import "@/styles/Home.module.scss";
import "@/styles/SCoreDreamFont.scss";
import type { AppProps } from "next/app";
import Title from "components/Title";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Space from "components/Space";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Title />

      <Nav />
      <Space />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
