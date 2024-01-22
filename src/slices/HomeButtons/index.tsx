import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Props for `Button`.
 */
export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

/**
 * Component for "Button" Slices.
 */
const Buttons = ({ slice }: ButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
       <Button size="lg" asChild className=" col-span-2 m-auto mt-10">
        <Link href="/notes">{slice.primary.home_button1}</Link>
       </Button>
       <Button size="lg" asChild className=" col-span-2 m-auto mt-10">
        <Link href="/notes">{slice.primary.home_button2}</Link>
       </Button>
      
    </section>
  );
};

export default Button;
