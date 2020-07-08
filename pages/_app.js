import React, { useLayoutEffect, useEffect, useState } from 'react'
import Router from 'next/router'

// External Libs
import '../public/libs/bootstrap/bootstrap.min.css'

// Custom styles
import '../public/custom/css/black-dashboard-react.css'
import '../public/custom/css/demo.css'
import '../public/custom/css/template.css'

// External Components
import 'react-datepicker/dist/react-datepicker.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import Nav from '../components/utils/Nav'
import Footer from '../components/utils/Footer'
import PageError from '../components/utils/PageError'
import Auth from '../helpers/Auth.ts'
import { route } from 'next/dist/next-server/server/router'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  // const router = useRouter();
  const [allowLoad, setAllowLoad] = useState(false);

  const allowEntryPoints = [
    '/',
    '/registrar'
  ];

  const prohibitNavigationBars = [
    '/',
    '/registrar'
  ];



  useLayoutEffect(() => {
    if (!allowEntryPoints.includes(window.location.pathname)) {
      console.log(`💋👀 Verificando Autenticidade para rota "${window.location.pathname}"`)
      if (!Auth.isAuth()) {
        setAllowLoad(false)
      } else {
        setAllowLoad(true)
      }
    } else {
      console.log(`👌👍 Rota Livre "${window.location.pathname}"`)
      setAllowLoad(true)
    }
  }, [])

  return <>
    {!prohibitNavigationBars ? <Nav /> : ''}
    {allowLoad ?
      <Component {...pageProps} /> :
      <PageError
        statusCode="401"
        message="Você não tem Acesso Aqui"
        title="Autenticação"
        action="Entrar no Sistema"
        actionFunction={() => {
          window.location.href = '/'
        }}
      />}
    {!prohibitNavigationBars ? <Footer /> : ''}
  </>
}


