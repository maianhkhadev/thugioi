'use client';
import React from 'react';
import { Title } from 'rebear';
import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  return (
    <section className={styles.section}>
      <Title className={styles.title} level={3}>
        Thông tin cá nhân
      </Title>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://placehold.co/400"
          alt="Mai Anh Kha"
        />
        <div className={styles.info}>
          <h3 className={styles.name}>Mai Anh Kha</h3>
          <ul className={styles.meta}>
            <li>
              <strong>Truyện đã đọc:</strong> 5
            </li>
            <li>
              <strong>email:</strong> maianhkha.dev@gmail.com
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

export default UserDetails;
