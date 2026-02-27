import banner from "../assets/banner1.jpg";
import { Button } from "./ui/button";

const MidBanner = () => {
  return (
    <section className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover h-137.5 md:h-150"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl  flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font mb-4">
              Next-Gen Electronics at your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices free
              shipping on all orders
            </p>
            <Button variant="secondary" size="sm">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidBanner;
