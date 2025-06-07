export default function HitsMissesLabel() {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className="h-4 w-4 bg-red-600 rounded" />
      <span>Erros</span>
      <div className="h-4 w-4 bg-blue-900 rounded" />
      <span>Acertos</span>
    </div>
  )
}