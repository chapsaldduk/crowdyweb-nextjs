import symbol from "/public/crowdysymbol.png";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="fixed w-full h-8vh bg-ffffff SCoreDreamFont3 bg-ffffff z-50">
      <div className="flex text-2vh">
        <Link href="/" className="flex w-150px relative left-5 top-20px">
          <Image src={symbol} alt="" className="w-30px h-30px" />
          <span className="text-crowdyColor SCoreDreamFont5">크라우디</span>
        </Link>
        <Link
          href="/"
          className="relative top-20px left-10 hover:text-crowdyColor"
        >
          홈
        </Link>
        <Link
          href="/magazine"
          className="relative top-20px left-15 hover:text-crowdyColor"
        >
          매거진
        </Link>
        <Link
          href="/inquiry"
          className="relative top-20px left-20 hover:text-crowdyColor"
        >
          문의하기
        </Link>
      </div>
    </nav>
  );
}
