import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  normal = true,
  active = false,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    normal,
    active,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      <ul>
        <li className={cx("title")}>
          {children}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </Comp>
  );
}

export default Button;
