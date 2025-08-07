"use client"

import { useState } from "react"
import { UserCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie"
import { BASE_URL } from "../../../constants/baseUrl"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      setSubmitting(true)

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error || 'Erro ao fazer login')
        setSubmitting(false)
        return
      }

      console.log('Token recebido:', data.token)

      Cookies.set('eduboard_token', data.token, {
        expires: 1,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })

      router.push('/')
      setSubmitting(false)

    } catch (error) {
      console.error('Erro na requisição de login:', error)
      setSubmitting(false)
      alert('Erro ao conectar com o servidor. Tente novamente mais tarde.')
    }
  }

  return (
    <div className="bg-blue-200 p-8 flex flex-col w-2/3 rounded-xl border-1 border-gray-400">
      <UserCircle2 size={64} className="text-blue-950 mx-auto mb-4" />
      <label htmlFor="email">Usuario: admin Senha: admin</label>
      <form className="flex flex-col gap-2 text-blue-950">
        <label htmlFor="email">Usuario</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-blue-50 rounded-md p-3 border-1 border-gray-400 outline-0"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="bg-blue-50 rounded-md p-3 border-1 border-gray-400 outline-0"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-950 text-white rounded-md p-3 my-4"
          disabled={submitting}
        >
          {submitting ? 'Entrando...' : 'Entrar'}
        </button>

        {/* <h2 className="mx-auto">
          Primeira vez? <Link href="/register" className="font-bold">Cadastre-se</Link>
        </h2> */}
      </form>
    </div>
  )
}
