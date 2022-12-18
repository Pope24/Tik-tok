import classNames from 'classnames/bind';
import styles from './AccountItem/AccountItem.module.scss';
function AccountItem() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1671519600&x-signature=aokRszi7Ly19X4N%2Bs0ciDZ0fV%2Bo%3D"
                alt="Hoaa"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>Dao Le Phuong Hoa</h4>
                <span className={cx('username')}>Dao Le Phuong Hoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
