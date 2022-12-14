import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
