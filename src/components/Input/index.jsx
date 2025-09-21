import { Input as InputAntd } from 'antd';
import styles from './styles.module.css';
import classNames from 'classnames';

const Input = ({ className, ...props }) => {
  return (
    <InputAntd className={classNames(styles.input, className)} {...props} />
  );
};

export default Input;
