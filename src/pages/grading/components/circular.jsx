import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

export default function Circular({ value }) {
  return (
    <Card className="w-[240px] absolute top-3 right-3 h-[240px] border-none">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "",
            value: "text-3xl font-semibold text-white",
          }}
          value={value}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
    </Card>
  );
}
