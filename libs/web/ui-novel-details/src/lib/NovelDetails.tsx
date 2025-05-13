'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from 'rebear';
import styles from './NovelDetails.module.scss';

export const NovelDetails = () => {
  return (
    <section className={styles.novelDetails}>
      <div className={styles.header}>
        <div className={styles.cover}>
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className={styles.basicInfo}>
          <h1 className={styles.title}>Mạo hiểm giả cuối cùng</h1>
          <ul className={styles.meta}>
            <li>
              <strong>Tác giả:</strong> Dedart
            </li>
            <li>
              <strong>Thể loại:</strong> Huyền bí, Phiêu lưu, Hài hước
            </li>
            <li>
              <strong>Tình trạng:</strong> Đang ra
            </li>
            <li>
              <strong>Lượt xem:</strong> 132,400
            </li>
          </ul>
          <div className={styles.actions}>
            <Link href={'/chapter/1'}>
              <Button variant="primary" size="md">
                Đọc Truyện
              </Button>
            </Link>
            <Button variant="secondary" size="md">
              Theo Dõi
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Giới thiệu truyện</h2>
        <p>
          Một thời đại mà câu chuyện vô vọng, đau khổ và đầy bi thảm về sáu vị
          anh hùng đã phong ấn Dark Mage, kẻ tìm cách để tiêu diệt Maple World,
          đã trở thành một truyền thuyết mà trẻ em yêu thích. Hiệp sĩ đoàn
          Cygnus thất thủ, quân kháng chiến đã sụp đổ, hội Cross Hunters bị hủy
          diệt và các mạo hiểm giả đã bị tiêu diệt hoàn toàn. Và cả vị sáu anh
          hùng đều đã tử trận. Thời đại mà không một ai có thể ngăn cản sự trở
          lại của Dark Mage và những kẻ phục tùng hắn. Trong thời đại đen tối
          ấy, có một mạo hiểm giả vẫn tiếp tục chiến đấu đến cùng.
        </p>
      </div>
    </section>
  );
};

export default NovelDetails;
