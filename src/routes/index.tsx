// src/routes/index.tsx
import Category from "@/components/Category";
import MidBanner from "@/components/MidBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useDataContext } from "@/context/DataContext";
import { createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const context = useDataContext();

  if (!context) {
    return <div>Error: DataContext not available</div>;
  }

  const { data, fetchAllProducts } = context;

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <main>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.isArray(data) &&
            data.length > 0 &&
            data.slice(0, 7).map((product) => {
              return (
                <CarouselItem key={product.slug}>
                  <div>
                    <Card className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] w-full">
                      <CardContent className="flex gap-10 justify-center items-center h-150 px-4">
                        <div className="space-y-6">
                          <h3 className="text-red-500 font-semibold font-sans text-sm">
                            Powering Your World with the Best Clothes
                          </h3>
                          <h1 className="font-bold text-4xl line-clamp-3 uppercase md:w-125 text-white">
                            {product.title}
                          </h1>
                          <p className="text-gray-400 md:w-125 line-clamp-3 pr-7">
                            {product.description}
                          </p>
                          <Button
                            variant="destructive"
                            size="lg"
                            className="mt-2"
                          >
                            Shop Now
                          </Button>
                        </div>
                        <img
                          src={product.image}
                          alt="product image"
                          className="rounded-full w-137.5 h-137.5 hover:scale-110 transition-all shadow-2xl shadow-red-400"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <Category />
      <MidBanner />
    </main>
  );
}
