import Link from 'next/link';
export default function Navbar() {
    return (
      <nav>
        <h1>Navbar</h1>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/register">register</Link>
        </li>

      </nav>
    );
  }
  