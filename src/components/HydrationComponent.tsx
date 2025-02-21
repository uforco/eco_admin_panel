"use client";
import  { ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode
}

function HydrationComponent(props: Props) {
  const {children} = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent mismatches

  return children;
}

export default HydrationComponent;
