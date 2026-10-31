import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#ffffff',
      color: '#18252b'
    }}>
      <h1 style={{ fontSize: 'clamp(5rem, 16vw, 9rem)', fontWeight: 900, letterSpacing: '-0.06em', lineHeight: 1, marginBottom: '1rem', color: '#4071f4' }}>404</h1>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#18252b' }}>Page Not Found</h2>
      <p style={{ color: '#475569', maxWidth: '400px', marginBottom: '2rem' }}>
        The page you are looking for doesn&apos;t exist or has been relocated.
      </p>
      <Link href="/" style={{
        padding: '0.75rem 1.75rem',
        borderRadius: '8px',
        backgroundColor: '#4071f4',
        color: '#ffffff',
        fontWeight: 600,
        textDecoration: 'none'
      }}>
        Return to Portfolio
      </Link>
    </div>
  );
}
