import React, { createRef, useEffect, useState } from "react";
import styles from "../../styles/.module.css";
import { useNavigate } from "react-router-dom";
import Questions from "../../common/api/questionApi.json";

export default function Inspect() {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = createRef(null);
  const TOTAL_SLIDES = 12;
  const history = useNavigate();
  const [mbtiTest, setMbtiTest] = useState([]);

  const nextSlideFir = () => {
    //현재 mbti 배열에 더해라 api에 답 첫번째타입들을  mbti 타입이 나옴 T 인지 I인지
    setMbtiTest(mbtiTest + Questions[num].answers[0].type);
    console.log(mbtiTest);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transform += "translateX(-100vw)";
  };
  const nextSlideSec = () => {
    setMbtiTest(mbtiTest + Questions[num].answers[1].type);
    console.log(mbtiTest);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    slideRef.current.style.transform += "translateX(-100vw)";
  };

  //검사후 mbti 유형별 (E,I, N, S, T, F... 등등 통계자료)
  const mbtiChecker = () => {
    setLoading(true);
    let map = {};
    let result = [];
    for (let i = 0; i < mbtiTest.length; i++) {
      if (mbtiTest[i] in map) {
        //map안에 이미 mbtiTest[i]가 있으면 1를 더해라
        map[mbtiTest[i]] += 1;
        console.log(map);
      } else {
        //처음이면 1로 지정해라
        map[mbtiTest[i]] = 1;
        console.log(map);
      }
    }
    //최종 mbti를 result에 넣어줌
    for (let count in map) {
      //최종 2개씩 인거 뽑아라
      if (map[count] > 1) {
        result.push(count);
      }
    }

    setTimeout(() => {
      const examResult = result.join("");
      console.log("examResult", examResult);
      history.push(`/result/${examResult}`);
    }, 3000);
  };

  // 12중 몇번쨰인지 나타냄
  useEffect(() => {
    currentSlide > TOTAL_SLIDES && mbtiChecker();
  }, [currentSlide]);

  return (
    <>
      <section className={styles.container}>
        {!loading && (
          <div className={styles.slider} ref={slideRef}>
            {Questions.map((item) => (
              <div className={styles.content} key={item.id}>
                <div className={styles.top}>
                  <div className={styles.mbti__counter}>
                    <span className={styles.mbti__progress__color}>
                      {currentSlide}
                    </span>
                    <span className={styles.mbti__end__color}>
                      /{TOTAL_SLIDES}
                    </span>
                  </div>
                  <h1 className={styles.mbti__question}>{item.question}</h1>
                </div>
                <article className={styles.mbti__btn__box}>
                  <button
                    className={styles.mbti__button}
                    onClick={nextSlideFir}
                  >
                    {item.answers[0].content}
                  </button>
                  <button
                    className={styles.mbti__button}
                    onClick={nextSlideSec}
                  >
                    {item.answers[1].content}
                  </button>
                </article>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className={styles.loading__container}>
            <img
              className={styles.ticket}
              src="img/flying.png"
              alt="e-ticket"
            />
            <div className={styles.loading}></div>
          </div>
        )}
      </section>
    </>
  );
}
