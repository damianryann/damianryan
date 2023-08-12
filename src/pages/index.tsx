import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>This Is Red Tower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is Red Tower" />
        <div className="section-container">
          <section className="image d-flex align-items-center">
            <span className="text-white">It's time to party</span>
          </section>
          <section className="secondary">
            <h1>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </h1>
          </section>
          <section className="primary">
            <h1>Go ahead...</h1>
          </section>
          <section className="secondary">
            <h1>Keep scrolling...</h1>
          </section>
          <section className="primary">
            <h1>Ok, thats it.</h1>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
