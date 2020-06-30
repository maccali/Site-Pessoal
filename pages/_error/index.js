import Head from 'next/head'
// import Nav from '../../components/utils/nav'
import styles from './error.module.css'

function Error({ statusCode }) {
  return (
    <>
      {/* <Nav /> */}
      <Head>
        <title>Apod - Error</title>
      </Head>
      <main>
        <div className="container-fluid bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  {statusCode
                    ? <div className={styles.text}>
                      <p>An error</p>
                      <h2>{statusCode}</h2>
                      <p>occurred on server</p>
                    </div>
                    : <div className={styles.text}>
                      <p>An error occurred on client</p>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
