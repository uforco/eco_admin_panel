import React from "react";

// import { Button } from "@/components/ui/button";
import {
  Dialog,
  //   DialogClose,
  DialogContent,
  //   DialogFooter,
  //   DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell } from "@/components/ui/table";
import { TbDatabaseEdit } from "react-icons/tb";
import { useUpdateStockMutation } from "@/redux/features/stock_product_list/stockProductList";
// import toast from "react-hot-toast";

const StockControlleWithServer = ({
  stock_Status,
  id,
}: {
  stock_Status: number;
  id: string;
}) => {
  const [open, setOpen] = React.useState(false);
  const [stuck, setStuck] = React.useState<string>("");

  const [updateProductStock, { isLoading: isUpdating }] =
    useUpdateStockMutation();

  const updateStock = async (stockStatus: string) => {
    // if(!stuck) return
    await updateProductStock({ id, stockStatus, stock: stuck });
    setStuck("");
    setOpen(false);
  };

  return (
    <TableCell>
      <div className=" flex items-center gap-2  ">
        <p>{stock_Status}</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className=" border p-1 text-xl rounded-md ">
              <TbDatabaseEdit></TbDatabaseEdit>
            </button>
          </DialogTrigger>
          <DialogContent className="w-60 h-48 sharif9999999999 ">
            <div className=" pt-2 ">
              {" "}
              <DialogTitle>
                Stock Status - {Number(stock_Status) + Number(stuck)}
              </DialogTitle>{" "}
            </div>
            <div className="flex items-center  border ">
              <input
                className=" text-2xl font-semibold "
                type="number"
                value={stuck}
                onChange={(e) => setStuck(e.target.value)}
              ></input>

              <button
                disabled={isUpdating}
                onClick={() => updateStock("add")}
                style={{ background: "#6366f1", width: "120px" }}
                type="button"
                className="bg-indigo-500 flex justify-center p-1 cursor-pointer "
              >
                {isUpdating ? "Processing…" : "ADD"}
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TableCell>
  );
};

export default StockControlleWithServer;
