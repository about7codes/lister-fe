import Router  from 'next/router';
import { parseCookies } from 'nookies';
import Layout from '../components/Layout';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx}) => {
  let pageProps = {};
  const token = parseCookies(ctx).token;
  

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if(!token) {
    if(ctx.pathname === '/notes') {
      redirectUser(ctx, '/signin');
    }
  }

  return { pageProps };
};


// API route 
// https://listex.herokuapp.com/

// https://anuraghazra.dev/

export default MyApp
