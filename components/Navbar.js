import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      console.log("route change complete ON");
      const userEmail = parseCookies().user;
      if(!userEmail) {
        return setUserId(null);
      }
      console.log(userEmail);
      setUserId(userEmail);

    })

    return () => {
      router.events.off('routeChangeComplete', () => {
        console.log("route change complete OFF");
      });
    }

  }, [router.events]);

  console.log(userId);
  const logout = () => {
    destroyCookie(null, 'token');
    destroyCookie(null, 'user');
    Router.push('/');
  };
  
  return (
    <div className='navbar'>
        <nav className='nav'>
            <div className="logo">
                <Link href="/">
                  <a>Lister</a>
                </Link>
            </div>
            { userId ? (
              <div className="links">
                <Link href="/notes">
                  <a>notes</a>
                </Link>
                <Link href="/signin">
                  <a>Profile</a>
                </Link>
                <a onClick={logout}>Logout</a>
              </div>
            ) : (
              <div className="links">
                <Link href="/notes">
                  <a>notes</a>
                </Link>
                <Link href="/signin">
                  <a>Signin</a>
                </Link>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </div>
            )}
        </nav>
    </div>
  );
};

export default Navbar;
