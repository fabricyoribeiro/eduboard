import { UserCircle, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Login() {
  return (
    <div className="bg-blue-200 p-8 flex flex-col w-2/3 rounded-xl border-1 border-gray-400">
      <UserCircle2 size={64} className="text-blue-950 mx-auto mb-4" />
      <form action="" className="flex flex-col gap-2 text-blue-950">
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" className="bg-blue-50 rounded-md p-3 border-1 border-gray-400 outline-0" />
        <label htmlFor="">Senha</label>
        <input type="password" name="password" id="password" className="bg-blue-50 rounded-md p-3 border-1 border-gray-400 outline-0" />
        {/* por enquanto é um link */}
        <button className="bg-blue-950 text-white rounded-md p-3 my-4">
          <Link href='/'>
            Entrar
          </Link>
        </button>
        <h2 className="mx-auto">Primeira vez? <Link href='/register' className="font-bold">Cadastre-se</Link></h2>
      </form>
      
    </div>
  )
}
