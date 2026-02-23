// src/routes/__root.tsx
import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

type Location = { country?: string; state?: string; city?: string } | undefined;

function RootComponent() {
  const [location, setLocation] = useState<Location>(undefined);
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setLocation({
          country: data.address.country,
          state: data.address.state,
        });
      } catch (error) {}
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Navbar location={location} getLocation={getLocation} />
      <Outlet /> {/* child routes render here */}
      <TanStackRouterDevtools />
    </>
  );
}
