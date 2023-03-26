import Space from "components/Space";
import styles from "./index.module.css";
export default function Magazine() {
  return (
    <div>
      <div className="bg-#ffffff w-full h-screen">
        {/* section01 */}
        <div className="w-full h-450px bg-#f0fbf6">
          <div className="SCoreDreamFont4 font-semibold text-44px absolute top-15 left-50 -translate-x-1/2 -treanlate-y-1/2 w-300px">
            <span className={styles.title01}>매거진, 사장님이</span>
            <br />
            <span>풀어내는 카페 이야기</span>
          </div>
        </div>
      </div>
    </div>
  );
}
