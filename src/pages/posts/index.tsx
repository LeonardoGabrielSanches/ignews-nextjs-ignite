import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprendendo React de forma facil e interativa</strong>
            <p>Venha aprender com nós a melhor forma de fazer o react e se divertir com tudo isso.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprendendo React de forma facil e interativa</strong>
            <p>Venha aprender com nós a melhor forma de fazer o react e se divertir com tudo isso.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprendendo React de forma facil e interativa</strong>
            <p>Venha aprender com nós a melhor forma de fazer o react e se divertir com tudo isso.</p>
          </a>
        </div>
      </main>
    </>
  );
}