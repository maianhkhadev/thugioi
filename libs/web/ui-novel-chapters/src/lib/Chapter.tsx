import React from 'react';

type ChapterProps = {
  id: number;
  title: string;
};

export const Chapter = (props: ChapterProps) => {
  const { id, title } = props;

  return (
    <li>
      <a href={`/chapter/-${id}`}>{title}</a>
    </li>
  );
};

export default Chapter;
