import "bootstrap/dist/css/bootstrap.css";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
// {cx()}
function Header() {
  const sidebarEvent = document.getElementById("sidebarEvent");
  const sidebar = document.querySelector(".sidebar");
  sidebarEvent.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-toggle");
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-content")}>
        <header>
          <nav className={cx("my-navbar", "navbar container navbar-expand-lg")}>
            <div className={cx("container-fluid")}>
              {/* logo */}
              <a className={cx("navbar-brand position-relative p-0")} href="#">
                <img src="" alt="logo" />
              </a>
              <button
                className={cx("navbar-toggler")}
                id="sidebarEvent"
                // Viết js xử lý sự kiện onclick

                type="button"
              >
                {/* cài fontawesome */}
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className={cx("collapse navbar-collapse")}>
                {/* menu */}
                <ul
                  className={cx(
                    "navbar-nav position-relative ms-auto mx-4 mb-2 mb-lg-0 d-flex gap-4 justify-content-center align-items-center"
                  )}
                >
                  <li className={cx("nav-item")}>
                    <a
                      className={cx("nav-link", "active")}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      About
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      Blog
                    </a>
                  </li>
                  <li className={cx("nav-item")}>
                    <a className={cx("nav-link")} href="#">
                      Contact
                    </a>
                  </li>
                  <li className={cx("nav-item dropdown")}>
                    <a
                      className={cx("nav-link dropdown-toggle")}
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className={cx("dd-menu", "dropdown-menu fade-up")}>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#l">
                          Destinations
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          FAQ{" "}
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          Team{" "}
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a className={cx("dd-item", "dropdown-item")} href="#">
                          {" "}
                          404{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
        </header>
      </div>
    </div>
  );
}

export default Header;
