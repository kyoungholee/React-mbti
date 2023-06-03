import styles from "../../styles/countries.module.css";
import { Link, useParams } from "react-router-dom";
import Countries from "../../common/api/coutriesApi.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import SEOMetaTag from "../../pages/SEOMetaTag";

const Profile = () => {
  let { nation } = useParams();

  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  return (
    <>
    <SEOMetaTag title="나라 별 결과페이지" description="본인의 mbti를 알고 여행 장소를 알 수 있다." keywords="검사, 여행, mbti" />

      <div className={styles.wrapper} key={Countries[`${nation}`].id}>
        <div className={styles.container}>
          <div className={styles.header}>
            <FontAwesomeIcon
              icon={faPlane}
              className={styles.icons}
              style={{ color: "#2b82d4" }}
            />
            <p className={styles.result}>
              {" "}
              본인에 MBTI와 여행지를 확인해보세요.{" "}
            </p>
            <img src={Countries[`${nation}`].img} alt="해당 나라 사진" />
          </div>
          <div className={styles.result_type}>
            <h1>{Countries[`${nation}`].subject}</h1>
            <br />
          </div>
          <div className={styles.result_title}>
            <h2>{Countries[`${nation}`].id}의 여행 특징은?</h2>
          </div>
          <div>
            <ul className={styles.desTitle}>
              {Countries[`${nation}`].description.map((item) => (
                <li className={styles.desList}>{item.des}</li>
              ))}
            </ul>
          </div>
          <div className={styles.button_box}>
            <Link to="/" className={styles.button}>
              다시하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
