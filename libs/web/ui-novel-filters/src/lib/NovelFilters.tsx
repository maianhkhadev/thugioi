'use client';
import React, { useState } from 'react';
import { Title, Input, Button } from 'rebear';
import styles from './NovelFilters.module.scss';

const categories = [
  'Huyền Huyễn',
  'Tiên Hiệp',
  'Đô Thị',
  'Khoa Huyễn',
  'Ngôn Tình',
  'Kiếm Hiệp',
  'Quân Sự',
  'Trinh Thám',
  'Xuyên Không',
  'Hài Hước',
];

export const NovelFilters = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    setSearchText(value);
  };

  const handleSearch = () => {
    console.log('Tên truyện:', searchText);
    console.log('Thể loại chọn:', selectedCategories);
  };

  return (
    <section className={styles.novelFilter}>
      <header className={styles.header}>
        <Title level={3}>Lọc truyện</Title>
      </header>

      <Input
        className={styles.searchBox}
        size="md"
        placeholder="Nhập tên truyện..."
        value={searchText}
        onChange={handleChange}
      />

      <div className={styles.categories}>
        {categories.map((category) => {
          const selected = selectedCategories.includes(category);
          const variant = selected ? 'primary' : 'secondary';

          return (
            <Button
              variant={variant}
              size="sm"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default NovelFilters;
