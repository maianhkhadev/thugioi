import React from 'react';
import styles from './WritterDetails.module.scss';

export const WritterDetails = () => {
  return (
    <section className={styles.writterDetails}>
      <h2>Thông Tin Tác Giả</h2>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://placehold.co/400"
          alt="Lão Ngoan Đồng"
        />
        <div className={styles.info}>
          <h3 className={styles.name}>Lão Ngoan Đồng</h3>
          <p className={styles.bio}>
            Một tác giả nổi tiếng trong thể loại huyền bí và phiêu lưu, với lối kể chuyện dí dỏm và giàu trí tưởng tượng. Các tác phẩm của ông luôn mang đến những trải nghiệm ly kỳ và bất ngờ cho người đọc.
          </p>
          <ul className={styles.meta}>
            <li><strong>Số tác phẩm:</strong> 12</li>
            <li><strong>Quốc tịch:</strong> Việt Nam</li>
            <li><strong>Thời gian hoạt động:</strong> 2010 - nay</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WritterDetails;
