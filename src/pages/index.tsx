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
          <section className="image d-flex align-items-end justify-content-start">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <span className="display-1 text-white fw-bold bg-black">
                  It's time to party with us at Notting Hill Carnival
                </span>
                <br />
                <span className="display-6 text-white fw-bold bg-black">
                  27th - 28th August, 2023
                </span>
              </div>
            </div>
          </section>
          <section className="secondary">
            <div className="row">
              <div className="col-md-6">
                <h2>What do we do?</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
          </section>
          <section className="primary">
            <div className="row">
              <div className="col-md-12">
                <h1>Go ahead...</h1>{' '}
              </div>{' '}
            </div>
          </section>
          <section className="secondary">
            <div className="row">
              <div className="col-md-12">
                <h1>Keep scrolling...</h1>{' '}
              </div>{' '}
            </div>
          </section>
          <section className="primary">
            <div className="row">
              <div className="col-md-12">
                <h1>Ok, thats it.</h1>{' '}
              </div>{' '}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
