
function Carros() {

 

  const Carros = [
    {
      Marca: "Mercedes-Benz classe A",
      Ano: 2004,
      Cor: "Preto",
      Preco: "R$ 25.000,00",
    },
    {
      Marca: "Honda Civic",
      ano: 2010,
      Cor: "Prata",
      Preco: "R$ 45.000,00",
    },
    {
      Marca: "Chevrolet Onix",
      Ano: 2018,
      Cor: "Branco",
      Preco: "R$ 55.000,00",
    },
    {
      Marca: "Ford Ka",
      Ano: 2015,
      Cor: "Vermelho",
      Preco: "R$ 30.000,00",
    },
    {
      Marca: "Volkswagen Gol",
      Ano: 2012,
      Cor: "branco",
      Preco: "R$ 40.000,00",
    },

    { Marca: "Fiat Uno", Ano: 2016, Cor: "Cinza", Preco: "R$ 35.000,00" },
    {
      Marca: "Toyota Corolla",
      Ano: 2020,
      Cor: "Preto",
      Preco: "R$ 90.000,00",
    },
    {
      Marca: "Hyundai HB20",
      Ano: 2019,
      Cor: "Branco",
      Preco: "R$ 50.000,00",
    },
    {
      Marca: "Nissan Versa",
      Ano: 2021,
      Cor: "Prata",
      Preco: "R$ 60.000,00",
    },
    {
      Marca: "Renault Kwid",
      Ano: 2018,
      Cor: "Amarelo",
      Preco: "R$ 40.000,00",
    },
  ];

  return <div>
    <div className="container flex justify-center " >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
             {Carros.map((carro, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-4 w-64 ">
          <h2 className="text-lg font-bold">{carro.modelo}</h2>
          <p>Marca: {carro.Marca}</p>
          <p>Ano: {carro.ano}</p>
          <p>Cor: {carro.Cor}</p>
        </div>
      ))}
        </div>
    </div>
  </div>;
}

export default Carros;
