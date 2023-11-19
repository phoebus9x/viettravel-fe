import classNames from "classnames/bind";
import styles from "./Test.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const cx = classNames.bind(styles);
// {cx()}
function Test() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("globalBtn")}>
        <ul>
          <li>
            <a href="#">
              Book Now
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
