import {
  Nav,
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t p-8">
      <Footer />
    </section>
  </main>
);

export default App;
