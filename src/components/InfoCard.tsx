interface InfoCardProps {
  title: string;
  value: any;
}

export default function InfoCard({ title, value }: InfoCardProps) {
  return (

    <div className=" w-56 xl:w-60  rounded-lg overflow-hidden border-2 border-blue-950/50">
      <div className="bg-blue-950 p-2 text-white  flex justify-center items-center font-semibold">
        {title}
      </div>
      <div className="  p-2 flex items-center justify-center font-semibold ">
        {value}
      </div>
    </div>
  );
}
