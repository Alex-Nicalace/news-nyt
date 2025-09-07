import clsx from 'clsx';
import { useState } from 'react';

import styles from './BurgerButton.module.scss';

type BurgerButtonProps = {
  className?: string;
};

export default function BurgerButton({ className }: BurgerButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={clsx(styles.burger, className, { [styles.active]: open })}
      onClick={() => setOpen(!open)}
    >
      <span className={styles.icon}>
        <span></span>
      </span>
    </button>
  );
}
