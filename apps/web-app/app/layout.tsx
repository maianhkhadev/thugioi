import { Header } from '@ux-apps/ui-header';
import { Footer } from '@ux-apps/ui-footer';
import 'rebear/style.css'
import './global.css';

export const metadata = {
  title: 'Thư giới',
  description: 'Thư giới',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
