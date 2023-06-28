import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Vani Quiz',
  description: 'Vani Quiz Task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <div className="h-[100vh] w-[100vw] flex justify-center">
          <div className='max-w-[460px] bg-vani-purple w-full flex flex-col justify-center items-center'>{children}</div>
        </div>
      </body>
    </html>
  );
}
