import Navbar from '@/components/ui/Navbar';
import './globals.css';

export const metadata = {
  title: 'Avira World LLP',
  description: 'A tech industry website designed to showcase cutting-edge solutions, expertise, and innovation through user-friendly navigation and engaging visuals. ',
};

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('Error rendering component:', error);
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h1>Something went wrong</h1>
        <p>We&apos;re working on fixing it. Please try again later.</p>
      </div>
    );
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href='/'/>
      </head>
      <body>
        <ErrorBoundary>
          <Navbar />
          <main>{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
