export default function Footer() {
  return (
    <div className="absolute mt-150px w-full h-250px text-#343438 border-t-[1px] border-t-#f4f4f6">
      {/* 왜 border-top안먹음 */}
      <div className="w-500px relative top-30 left-50 -translate-x-1/2">
        <span>홈</span>
        <span className="absolute left-50 -translate-x-1/2">매거진</span>
        <span className="absolute right-0">문의하기</span>
      </div>
      <div className="w-250px relative top-50 left-50 -translate-x-1/2 -translate-y-1/2">
        문의<span className="absolute right-0">crowdy2022@gmail.com</span>
      </div>
    </div>
  );
}
