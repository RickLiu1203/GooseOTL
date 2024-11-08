// app/layout.js or a component where you want to apply the font
import { Albert_Sans } from 'next/font/google';

const albertSans = Albert_Sans({
  subsets: ['latin'],
});

export default function MapLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={albertSans.className}>
        {children}
      </body>
    </html>
  );
}
