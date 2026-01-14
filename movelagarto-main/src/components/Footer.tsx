export default function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-gray-500">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} MarkDigital — Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}