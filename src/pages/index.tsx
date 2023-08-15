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
          <section
            className="hero-image skew-section image d-flex align-items-end justify-content-start"
            style={{ backgroundImage: 'url("/nottinghill.jpg")' }}>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <span className="display-3 text-white fw-bold bg-black">
                  It's time to party with us at Notting Hill Carnival
                </span>
                <br />
                <span className="display-6 text-white fw-bold bg-black">
                  27th - 28th August, 2023
                </span>
              </div>
            </div>
          </section>
          <section className="skew-section secondary">
            <div className="row d-flex align-items-center">
              <div className="col-md-12 col-lg-6">
                <img
                  className="w-100 mb-4 mb-md-0"
                  src="/thumb-1.png"
                  alt="Red Tower with Rampage Sound at Notting Hill Carnival in 2021"
                />
              </div>
              <div className="col-md-6 justify-content-center align-items-center">
                <h2>
                  Youth, Talent and Business Development for Creative
                  Businesses, Individuals and Projects.
                </h2>
                <p>
                  We work with organisations and individuals in the creative
                  sector who want to establish and sustain themselves with a
                  view for long-term success. We specialize in mediating,
                  negotiating, representation and Project Managing complex
                  details - ensuring ALL stakeholders are satisfied. This in
                  turn will help you work effectively - allowing us to focus on
                  all the 'boring yet crucial bits'!
                </p>
                <p>
                  We have a vested interest in the youth market - and would
                  ideally love to work with those who serve this audience as a
                  primary focus.
                </p>
              </div>
            </div>
          </section>
          <section className="skew-section secondary">
            <div className="row">
              <div className="col-md-12">
                <h1>Go ahead...</h1>
              </div>
            </div>
          </section>
          <section className="skew-section secondary">
            <div className="row">
              <div className="col-md-12">Bleh</div>
            </div>
          </section>
          <section className="skew-section primary">
            <div className="row">
              <div className="col-md-12">
                <h1>Ok, thats it.</h1>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
