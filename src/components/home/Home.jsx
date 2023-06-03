import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";
import SEOMetaTag from "../../pages/SEOMetaTag";


export default function Home() {
  return (
    <>
    <SEOMetaTag title="여행 Mbti 검사 시작페이지" description="mbti검사를 통해 여행 장소를 알려주는 사이트" keywords="검사, 여행, mbti"  />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <img
              className={styles.logo}
              src="img/hiker-travel.jpg"
              alt="로고"
            />
          </div>
          <div className={styles.middle}>
            <h2 className={styles.header}>올해는 어디로 갈까?</h2>
            <p>16개의 MBTI 유형을 토대로</p>
            <p>가장 잘 어울리는 여행지를 추천해드려요.</p>
          </div>
          <div className={styles.bottom}>
            <Link to="/test" className={styles.start__button}>
              테스트 하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
