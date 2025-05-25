'use client';
import React from 'react';
import { Title } from 'rebear';
import styles from './WritterDetails.module.scss';

export const WritterDetails = () => {
  return (
    <section className={styles.section}>
      <Title className={styles.title} level={3}>
        Thông tin tác giả
      </Title>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://placehold.co/400"
          alt="Dedart"
        />
        <div className={styles.info}>
          <h3 className={styles.name}>Dedart</h3>
          <ul className={styles.meta}>
            <li>
              <strong>Số tác phẩm:</strong> 12
            </li>
            <li>
              <strong>Quốc tịch:</strong> Hàn Quốc
            </li>
            <li>
              <strong>Thời gian hoạt động:</strong> 2010 - nay
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WritterDetails;
