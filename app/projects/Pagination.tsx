import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

export function CircularPagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: React.SetStateAction<number>) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "orange",
      onClick: () => setActive(index),
      className: "",
    } as any);

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="text-center flex items-center p-10 content-center justify-center gap-4 ">
      <div className="">
        <Button
          variant="text"
          className="md:flex  items-center gap-2 rounded-full hidden"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-40 w-4" /> Previous
        </Button>
      </div>
      <div className="flex items-center gap-10 text-4xl ">
        <IconButton
          style={{ background: "none" }}
         
          {...getItemProps(1)}
        >
          1
        </IconButton>
        <IconButton
          style={{ background: "none" }}
         
          {...getItemProps(2)}
        >
          2
        </IconButton>
        <IconButton
          style={{ background: "none" }}
         
          {...getItemProps(3)}
        >
          3
        </IconButton>
        <IconButton
          style={{ background: "none" }}
          
          {...getItemProps(4)}
        >
          4
        </IconButton>
        <IconButton
          style={{ background: "none" }}
         
          {...getItemProps(5)}
        >
          5
        </IconButton>
      </div>
      <div className="md:flex hidden">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full  "
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
