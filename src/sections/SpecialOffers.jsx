import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./components/Button";

const SpecialOffers = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <section className="flex justify-wrap item-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey tat redefines your experiences with
          unbeatable details. From premier selections to incredible savings, we
          offr unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfil your unique
          desires, surpassing the loftiest expectations. your journey with us is
          nothing short of expectations
        </p>

        <div className="mt-11 flex flex-wrap gap-14">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray rounded-full"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
