import { KeyFeature, CoreFeature, Feature, CoreFeature2, NumberedFunction, Testimonial, Payment, Pricing, FAQs } from "./sections";

const Home = () => (
  <div id="page-layout">
    <KeyFeature />
    <CoreFeature />
    <Feature />
    <CoreFeature2 />
    <NumberedFunction />
    <Testimonial />
    <Payment />
    <Pricing />
    <FAQs /> 
  </div>
);

export default Home