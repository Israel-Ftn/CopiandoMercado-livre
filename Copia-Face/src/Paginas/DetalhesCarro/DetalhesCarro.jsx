import { useParams } from 'react-router-dom';
import Carros from '../../services/Carros.json';

function DetalhesCarro() {
  const { id } = useParams(); // Pega o ID da URL
  const carro = Carros.find((item) => item.id === Number(id)); // Compara como número

  // Se o carro não for encontrado
  if (!carro) {
    return <h2>Carro não encontrado</h2>;
  }

  return (
    <div>
      <h1>Detalhes do Carro</h1>
      <div className="card">
        <img
          src={carro.imagem}
          alt={carro.Marca}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-xl font-bold">{carro.Marca}</h2>
        <p>Ano: {carro.ano}</p>
        <p>Modelo: {carro.modelo}</p>
        <p>Cor: {carro.cor}</p>
        <p>Descrição: {carro.Descricao}</p>
        <p>Preço: {carro.preco}</p>
      </div>
    </div>
  );
}

export default DetalhesCarro;
