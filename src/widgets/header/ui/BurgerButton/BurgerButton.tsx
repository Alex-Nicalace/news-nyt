import clsx from 'clsx';
import styles from './BurgerButton.module.scss';

type BurgerButtonProps = {
  className?: string;
  onClick?: () => void;
};

export default function BurgerButton({
  className,
  onClick,
}: BurgerButtonProps) {
  return (
    <button className={clsx(styles.burger, className)} onClick={onClick}>
      <span className={styles.icon}>
        <span></span>
      </span>
    </button>
  );
}
