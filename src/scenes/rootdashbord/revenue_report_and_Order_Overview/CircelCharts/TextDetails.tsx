import React from "react";
import { Check, Ellipsis, Plus, TriangleAlert, X } from "lucide-react";

interface Props {
  chartData: {
    status: string;
    report: number;
    fill: string;
  }[];
}

function TextDetails(props: Props) {
  const { chartData } = props;

  if(!chartData) return <p>data pass problem {'(TextDetails)'} ! Not data found </p>

  return (
    <div className=" textDetails ">
      {chartData.map((data) => (
        <div key={data.status} className=" detailsCard ">
          <div className=" flex items-center gap-2 ">
            <IconReturn typedata={data.status}></IconReturn>
            <p className=" stuteTitle ">{data.status}</p>
          </div>
          <p className=" dataStatus ">{data.report}</p>
        </div>
      ))}
    </div>
  );
}

export default TextDetails;

const IconReturn = ({ typedata }: { typedata: string }) => {
  const CoverIcon = ({
    children,
    colorCode,
  }: {
    children: React.ReactNode;
    colorCode: string;
  }) => {
    return (
      <p style={{ background: colorCode }} className=" iconStyle ">
        {children}
      </p>
    );
  };

  if (typedata?.toLowerCase() === "pending")
    return (
      <CoverIcon colorCode={"#DE2FFF"}>
        <Ellipsis />
      </CoverIcon>
    );
  if (typedata?.toLowerCase() === "shipped")
    return (
      <CoverIcon colorCode={"#4094F1"}>
        <Plus />
      </CoverIcon>
    );
  if (typedata?.toLowerCase() === "recieved")
    return (
      <CoverIcon colorCode={"#27BF68"}>
        <Check />
      </CoverIcon>
    );
  if (typedata?.toLowerCase() === "cancelled")
    return (
      <CoverIcon colorCode={"#FF304F"}>
        <X />
      </CoverIcon>
    );
  if (typedata?.toLowerCase() === "refunded")
    return (
      <CoverIcon colorCode={"#EDB213"}>
        <TriangleAlert />
      </CoverIcon>
    );
  return null;
};
