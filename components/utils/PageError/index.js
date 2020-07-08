import Head from 'next/head'
import Btn from '../Btn'
import { IoIosKey } from "react-icons/io";

import styles from './pageerror.module.css'

function Error({ statusCode, message, title, action, actionFunction }) {
  return (
    <>
      <Head>
        <title>❌ {title}</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  <div className={styles.text}>
                    <h1>{statusCode}</h1>
                    <h2>{message}</h2>
                    <Btn action={actionFunction}>
                      <IoIosKey />
                      {action}
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error
