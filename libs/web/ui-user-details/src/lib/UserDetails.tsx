import React from 'react';
import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src="https://placehold.co/200" alt="" />
      <div className={styles.info}>
        <h2 className={styles.name}>Nguyễn Văn A</h2>
        <p className={styles.email}>vana@example.com</p>
        <p className={styles.bio}>
          Lập trình viên frontend với 10 năm kinh nghiệm
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
