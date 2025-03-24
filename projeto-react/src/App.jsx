import './App.css'
import { Card } from './components/Card.jsx'

function App() {
  return (
    <>
      <div className="card-group container mt-5 border border-black p-5 rounded rounded-4">
        <h1 className="w-100 text-center">Produtos</h1>
        <Card number="1" description="Descrição do Card Nº" />
        <Card color="danger" number="2" description="Descrição do Card Nº" />
        <Card number="3" description="Descrição do Card Nº" />
      </div>
    </>
  )
}

export default App
