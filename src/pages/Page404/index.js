import classNames from "classnames/bind";
import styles from "./Page404.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

function Page404() {
  return (
    <div className={cx("site-wrapper")}>
      <section className={cx("page404", "pg")}>
        <div
          className={cx(
            "content",
            "row justify-content-center align-items-center m-0"
          )}
        >
          <div className={cx("wrapper", "col-lg-6 col-md-7")}>
            <div>
              <h3>404</h3>
              <h4>Page Not Found</h4>
              <p>the page you are looking for not avaible!</p>
              <Button>Back To Home</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page404;
