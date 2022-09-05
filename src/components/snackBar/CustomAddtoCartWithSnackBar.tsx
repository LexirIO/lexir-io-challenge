import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={30} ref={ref} variant="filled" {...props} />;
});

interface snackbarProps {
  productsPrice: string;
}

export default function CustomAddtoCartWithSnackBar({
  productsPrice,
}: snackbarProps): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="  flex flex-row items-start  gap-[4.1rem] pl-[0.9rem] w-[100%]   py-[1rem]">
      <button
        className="flex flex-row justify-between bg-[#2D2D2D] border border-[#F2F2F2] border-solid  w-[100%] h-[100%] py-[1.2rem] px-[4rem] rounded-[0.4rem]"
        onClick={handleClick}
      >
        <p className="text-white font-Lato font-[700] text-[1.6rem] leading-[2.5rem] ">
          Add to Cart
        </p>
        <p className="text-white font-Lato font-[700] text-[1.6rem] leading-[2.5rem] m2vsm:self-center">
          ${productsPrice}
        </p>
      </button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <span className="text-white font-Lato font-[700] text-[1.6rem] leading-[2.5rem] ">
            Successfully added to Cart
          </span>
        </Alert>
      </Snackbar>
    </div>
  );
}
