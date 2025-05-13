import React, { useState } from 'react';
import { ButtonIcon } from 'rebear';
import { IconMenu01, IconChevronLeft, IconChevronRight } from 'rebear-icons';
import styles from './Controls.module.scss';

export const Controls = () => {
  return (
    <section className={styles.section}>
      <ButtonIcon icon={<IconChevronLeft />} />

      <ButtonIcon icon={<IconMenu01 />} />

      <ButtonIcon icon={<IconChevronRight />} />
    </section>
  );
};

export default Controls;
