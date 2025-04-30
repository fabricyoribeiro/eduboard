interface InfoCardProps {
  title: string
  value: any
}

export default function InfoCard({title, value}: InfoCardProps) {
  return (
    // <div className="flex flex-col items-center justify-center w-72 h-24 rounded-lg overflow-hidden border-2 border-blue-950/50">
    //   <div className="bg-blue-950 text-white w-full h-12  flex justify-center items-center">
    //     <span className="">Alunos cadastrados</span>
    //   </div>
    //   <div className="bg-blue-50 w-full h-12  flex items-center justify-center font-bold text-blue-950">
    //     <span>22</span>
    //   </div>
    // </div>

    // <div className="w-72 rounded-lg overflow-hidden border-2 border-blue-950/50">
    //   <div className="bg-blue-950 p-2 text-white  flex justify-center items-center">
    //     <span className="">Alunos cadastrados</span>
    //   </div>
    //   <div className="bg-blue-50  p-2 flex items-center justify-center font-bold text-blue-950">
    //     <span>22</span>
    //   </div>
    // </div>

    <div className="w-64 rounded-lg overflow-hidden border-2 border-blue-950/50">
    <div className="bg-blue-950 p-2 text-white  flex justify-center items-center">
      {title}
    </div>
    <div className="bg-blue-50  p-2 flex items-center justify-center font-bold text-blue-950">
      {value}
    </div>
  </div>
  );
}
