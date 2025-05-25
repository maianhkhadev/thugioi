'use client';
import { Paragraph } from 'rebear';
import { Container } from '@ux-apps/ui-container';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          <Paragraph>Về chúng tôi</Paragraph>
          <Paragraph>Liên hệ</Paragraph>
          <Paragraph>Chính sách bảo mật</Paragraph>
          <Paragraph>Điều khoản sử dụng</Paragraph>
        </div>
        <div className={styles.bottom}>
          <Paragraph>© 2025 DocTruyen.net — All rights reserved.</Paragraph>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
