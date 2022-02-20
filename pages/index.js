import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h1>Lister</h1>
          <p className={styles.introContent}>
            Lister is a CURD based note taking app. It consumes Lister API to demonstrate CURD application functions with the help of this notes app.
            CURD functions that would be Create, Update, Read and Delete (CURD).
          </p>
        </div>
        <div className={styles.introSub}>
          <h2>Lister API</h2>
          <p className={styles.introContent}>
            Lister API is a Node JS and MongoDB based, deployed over heroku. Endpoints are available below.
          </p>
          <ul>
            <li>https://listex.herokuapp.com - GET</li>
            <li>https://listex.herokuapp.com/user/signin - POST</li>
            <li>https://listex.herokuapp.com/user/signup - POST</li>
            <li>https://listex.herokuapp.com/notes - GET</li>
            <li>https://listex.herokuapp.com/notes/new - POST</li>
            <li>https://listex.herokuapp.com/notes/update/noteId - PUT</li>
            <li>https://listex.herokuapp.com/notes/delete/noteId - DELETE</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
