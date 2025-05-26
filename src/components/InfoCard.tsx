interface InfoCardProps {
  title: string;
  value: any;
}

export default function InfoCard({ title, value }: InfoCardProps) {
  return (

    <div className=" w-56 xl:w-72  rounded-lg overflow-hidden border-2 border-blue-950/50">
      <div className="bg-blue-950 p-2 text-white  flex justify-center items-center">
        {title}
      </div>
      <div className="  p-2 flex items-center justify-center font-bold text-blue-950">
        {value}
      </div>
    </div>
  );
}
