'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  ButtonIcon,
  Modal,
  ModalTitle,
  ModalContent,
  Title,
} from 'rebear';
import { IconUser01 } from 'rebear-icons';
import { useCategories } from '@ux-apps/data-access-categories';
import { Container } from '@ux-apps/ui-container';
import styles from './Header.module.scss';
import src from './brand.png';

const links = [
  { label: 'Trang chủ', to: '/' },
  { label: 'Tìm kiếm', to: '/search' },
];

export function Header() {
  const { data: categories } = useCategories();
  const [open, onOpenChange] = useState(false);

  const handleClick = () => {
    onOpenChange(true);
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.bar}>
            <Image className={styles.brand} src={src} alt="" />

            <ButtonIcon variant="primary" size="md" icon={<IconUser01 />} />
          </div>

          <div className={styles.filter}>
            <Button variant="secondary" size="md" onClick={handleClick}>
              Thể loại
            </Button>
          </div>
        </Container>
      </header>

      <Modal open={open} onOpenChange={onOpenChange}>
        <ModalTitle>
          <Title level={5}>Chọn thể loại</Title>
        </ModalTitle>
        <ModalContent>
          <div className={styles.categories}>
            {categories.map((category) => (
              <Button variant="tertiary" size="md">
                {category.name}
              </Button>
            ))}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
