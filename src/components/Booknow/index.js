import classNames from 'classnames/bind';
import styles from './Booknow.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Booknow() {
    return <form id="about-form" className={cx("d-flex gap-lg-2 gap-md-1 gap-sm-4 gap-3 justify-content-evenly align-items-md-center")}>
        <div id="about-message"></div>
        <div>
            <h6>Name</h6>
            <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div>
            <h6>Destination</h6>
            <select name="city" id="destination">
                <option value="destination" selected disabled>Destination</option>
                <option value="turkey">Turkey</option>
                <option value="sweden">Sweden</option>
                <option value="indonesia">Indonesia</option>s
            </select>
        </div>
        <div>
            <h6>Tour Days</h6>
            <input type="date" name="name" required/>
        </div>
        <Button>Book Now</Button>
    </form>;
}

export default Booknow;
