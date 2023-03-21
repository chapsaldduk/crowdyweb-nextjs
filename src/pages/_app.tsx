import "@/styles/globals.css";
import "@/styles/Home.module.scss";
import "@/styles/SCoreDreamFont.scss";
import type { AppProps } from "next/app";
import Title from "components/Title";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Title />
    </div>
  );
}
