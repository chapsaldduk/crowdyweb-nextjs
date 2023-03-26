import Image from "next/image";
import Space from "components/Space";

//images
import img1 from "/public/assets/Intro/5imgs.webp";
import img2 from "/public/assets/Intro/3phones.png";

export default function Home() {
  return (
    <div id="index" className="SCoreDreamFont4 z-10">
      {/* section1 */}
      <div id="section01" className="min-w-full h-screen bg-section01">
        <Space />
        <div className="absolute top-1/2 left-25 translate-x-50 translate-y-50">
          <div className="text-44 font-semibold leading-53 mb-36 ">
            <span>카페 사장님의</span>
            <br />
            <span>자세한 이야기</span>
          </div>
          <div className="text-16 leading-19 font-extralight">
            <span>솔직 담백한 이곳 카페 사장님의</span>
            <br />
            <span>자세한 카페 이야기를 들어보아요.</span>
          </div>
        </div>
        <Image
          src={img1}
          alt=""
          width={723}
          className="absolute top-1/2 left-70 translate-x-50 translate-y-50"
        />
      </div>

      {/* section02 */}
      <div id="section02" className="min-w-full h-screen bg-ffffff flex">
        <Image
          src={img2}
          alt=""
          width={680}
          className="h-800px relative top-60 left-1/4 translate-x-50 translate-y-50"
        />
        <div className="relative top-90 left-1/3 translate-x-50 translate-y-50">
          <div className="text-44 font-semibold leading-53 mb-36">
            <span>서로 다른 사장님,</span>
            <br />
            <span>서로 다른 인터뷰,</span>
            <br />
            <span>브랜딩을 담은 매거진</span>
          </div>
          <div className="font-extralight leading-19 mb-36">
            <span>카페에 대한 질문과 사장님의</span>
            <br />
            <span>솔직한 답변을 매거진에 담았어요.</span>
          </div>
          <a href="/magazine">
            <button className="bg-button w-18vh h-6vh font-semibold">
              매거진 보러가기
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
