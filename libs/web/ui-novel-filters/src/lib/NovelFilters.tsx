'use client';
import React, { useState } from 'react';
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

  const handleSearch = () => {
    console.log('Tên truyện:', searchText);
    console.log('Thể loại chọn:', selectedCategories);
  };

  return (
    <section className={styles.novelFilter}>
      <h2>Lọc Truyện</h2>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Nhập tên truyện..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>

      <div className={styles.categories}>
        {categories.map((category) => (
          <label key={category} className={styles.categoryItem}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </section>
  );
};

export default NovelFilters;
