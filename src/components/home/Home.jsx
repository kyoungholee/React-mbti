import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/home.module.css";

export default function Home() {
  return (
    <>
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
