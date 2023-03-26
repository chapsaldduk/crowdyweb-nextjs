import Link from "next/link";
export default function Footer() {
  return (
    <div className="absolute mt-150px w-full h-250px text-#343438 border-t-[1px] border-t-#f4f4f6">
      {/* 왜 border-top안먹음 */}
      <div className="w-500px relative top-30 left-50 -translate-x-1/2">
        <span>
          <Link href="/" className="SCoreDreamFont3">
            홈
          </Link>
        </span>
        <span className="absolute left-50 -translate-x-1/2">
          <Link href="/magazine" className="SCoreDreamFont3">
            매거진
          </Link>
        </span>
        <span className="absolute right-0">
          <Link href="/inquiry" className="SCoreDreamFont3">
            문의하기
          </Link>
        </span>
      </div>
      <div className="w-250px relative top-50 left-50 -translate-x-1/2 -translate-y-1/2 SCoreDreamFont3">
        문의<span className="absolute right-0">crowdy2022@gmail.com</span>
      </div>
    </div>
  );
}
