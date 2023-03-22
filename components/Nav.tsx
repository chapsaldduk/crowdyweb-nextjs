import symbol from "/public/crowdysymbol.png";
import Image from "next/image";
import styles from "./style/Nav.module.css";
export default function Nav() {
  return (
    <nav className="fixed w-full h-8vh bg-ffffff SCoreDreamFont3 bg-ffffff z-50">
      {/* "flex flex-row text-2xl" */}
      <div className="flex text-2vh">
        <a href="/" className="flex w-150px relative left-5 top-20px">
          <Image src={symbol} alt="" className="w-30px h-30px" />
          <span className="text-crowdyColor">크라우디</span>
        </a>
        <a href="/" className="relative top-20px left-10">
          홈
        </a>
        <a href="/magazine" className="relative top-20px left-15">
          매거진
        </a>
        <a href="/inquire" className="relative top-20px left-20">
          문의하기
        </a>
      </div>
    </nav>
  );
}
