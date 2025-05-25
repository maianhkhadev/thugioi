'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  ButtonIcon,
  Modal,
  ModalTitle,
  ModalContent,
  Title,
  Paragraph,
} from 'rebear';
import { IconUser01 } from 'rebear-icons';
import { Container } from '@ux-apps/ui-container';
import styles from './Header.module.scss';

const links = [
  { id: 2, label: 'Danh sách truyện', href: '/novels' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.navigation}>
          <Link href="/" className={styles.title}>
            <Title level={1}>ThuGioi</Title>
          </Link>

          {links.map((link) => (
            <Link key={link.id} href={link.href} className={styles.link}>
              <Paragraph size="md">{link.label}</Paragraph>
            </Link>
          ))}
        </div>

        <Link href="/profile">
          <ButtonIcon variant="tertiary" size="md" icon={<IconUser01 />} />
        </Link>
      </Container>
    </header>
  );
}
