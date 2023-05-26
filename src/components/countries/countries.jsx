import styles from "../../styles/countries.module.css";
import { Link, useParams } from "react-router-dom";
import Countries from "../../common/api/coutriesApi.json";

const Profile = () => {
  let { nation } = useParams();

  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  return (
    <>
      <div className={styles.wrapper} key={Countries[`${nation}`].id}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.result}> 결과 화면 </p>
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
