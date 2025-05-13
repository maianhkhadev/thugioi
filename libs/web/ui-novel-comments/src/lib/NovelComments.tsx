import React from 'react';
import { Comment } from './Comment';
import styles from './NovelComments.module.scss';

const comments = [
  { id: 1, user: 'Hùng Sói', content: 'Truyện đọc cuốn quá, hóng chương mới mỗi ngày!' },
  { id: 2, user: 'Lan Hương', content: 'Phong cách viết rất lạ, mình thích cách xây dựng thế giới.' },
  { id: 3, user: 'Minh Anh', content: 'Chương 5 làm mình nổi da gà luôn, quá hấp dẫn.' },
  { id: 4, user: 'Thanh Bình', content: 'Có ai thấy nhân vật Minh hơi ngố không? 😂' },
  { id: 5, user: 'Tuấn Kiệt', content: 'Truyện hay, mong tác giả đừng drop nhé!' },
];

export const NovelComments = () => {
  
  return (
    <section className={styles.commentList}>
      <h2>Bình Luận</h2>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </ul>
    </section>
  );
};

export default NovelComments;
