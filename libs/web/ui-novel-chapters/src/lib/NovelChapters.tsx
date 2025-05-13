import React from 'react';
import { Chapter } from './Chapter';
import styles from './NovelChapters.module.scss';

const chapters = [
  { id: 1, title: 'Chương 1: Căn nhà số 13' },
  { id: 2, title: 'Chương 2: Bí ẩn đêm khuya' },
  { id: 3, title: 'Chương 3: Khách không mời' },
  { id: 4, title: 'Chương 4: Cánh cổng cổ xưa' },
  { id: 5, title: 'Chương 5: Quái vật phố Mink' },
  { id: 6, title: 'Chương 6: Người đưa thư kỳ lạ' },
  { id: 7, title: 'Chương 7: Lời nguyền gia tộc' },
  { id: 8, title: 'Chương 8: Manh mối bị lãng quên' },
  { id: 9, title: 'Chương 9: Đêm trăng máu' },
  { id: 10, title: 'Chương 10: Thoát khỏi phố Mink' },
];

export const NovelChapters = () => {
  

  return (
    <section className={styles.chapterList}>
      <h2>Danh Sách Chương</h2>
      <ul>
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} {...chapter} />
        ))}
      </ul>
    </section>
  );
};

export default NovelChapters;
