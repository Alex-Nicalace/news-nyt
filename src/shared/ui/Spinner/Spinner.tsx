import clsx from 'clsx';
import styles from './Spinner.module.scss';

type SpinnerProps = {
  className?: string;
};
export default function Spinner({ className }: SpinnerProps) {
  return <div className={clsx(styles.loader, className)}></div>;
}
