import ClasseA from "../../img/PrincipalPg/frent-ClassA.jpeg";
import Civic from "../../img/PrincipalPg/frente-civic.jpg";
import Onix from "../../img/PrincipalPg/frente-onix.jpeg";
import Ka from "../../img/PrincipalPg/frente-Ka.jpeg";
import Gol from "../../img/img-carros/carros/gol/frente.jpeg";
import Uno from "../../img/img-carros/carros/FiatuNO/frente.jpeg";
import Corolla from "../../img/PrincipalPg/frente-corolla.jpg";
import Hb20 from "../../img/PrincipalPg/frente-hb20.jpeg";
import Kwid from "../../img/PrincipalPg/frente-Kwid.jpeg";
import Versa from "../../img/PrincipalPg/frente-Versa.jpeg";
function Carros() {
  const Carros = [
    {
      id: 1,
      imagem: ClasseA,
      Marca: "Mercedes-Benz classe A",
      Ano: 2004,
      Cor: "Preto",
      Preco: "R$ 25.000,00",
    },
    {
      id: 2,
      imagem: Civic,
      Marca: "Honda Civic",
      Ano: 2010,
      Cor: "Prata",
      Preco: "R$ 45.000,00",
    },
    {
      id: 3,
      imagem: Onix,
      Marca: "Chevrolet Onix",
      Ano: 2018,
      Cor: "Branco",
      Preco: "R$ 55.000,00",
    },
    {
      id: 4,
      imagem: Ka,
      Marca: "Ford Ka",
      Ano: 2015,
      Cor: "Vermelho",
      Preco: "R$ 30.000,00",
    },
    {
      id: 5,
      imagem: Gol,
      Marca: "Volkswagen Gol",
      Ano: 2012,
      Cor: "branco",
      Preco: "R$ 40.000,00",
    },

    {
      id: 6,
      imagem: Uno,
      Marca: "Fiat Uno",
      Ano: 2010,
      Cor: "Cinza",
      Preco: "R$ 35.000,00",
    },
    {
      id: 7,
      imagem: Corolla,
      Marca: "Toyota Corolla",
      Ano: 2020,
      Cor: "Preto",
      Preco: "R$ 90.000,00",
    },
    {
      id: 8,
      imagem: Hb20,
      Marca: "Hyundai HB20",
      Ano: 2019,
      Cor: "Branco",
      Preco: "R$ 50.000,00",
    },
    {
      id: 9,
      imagem: Versa,
      Marca: "Nissan Versa",
      Ano: 2021,
      Cor: "Prata",
      Preco: "R$ 60.000,00",
    },
    {
      id: 10,
      imagem: Kwid,
      Marca: "Renault Kwid",
      Ano: 2018,
      Cor: "Branco",
      Preco: "R$ 40.000,00",
    },
  ];

  return (
    <div>
      <div className="container flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Carros.map((carro) => (
            <div
              key={carro.id}
              className="shadow-md rounded-lg p-4 m-4 w-64 bg-red-700 flex flex-col items-center"
            >
              <img
                className="w-150 h-50  rounded-2xl"
                src={carro.imagem}
                alt=""
              />
              <h2 className="text-lg font-bold">{carro.modelo}</h2>

              <p className="text-white mt-2">Marca: {carro.Marca}</p>
              <p className="text-white ">Ano: {carro.Ano}</p>
              <p className="text-white pb-2">Cor: {carro.Cor}</p>
              <button className="bg-white w-50 text-black rounded-3xl hover:bg-black hover:text-white p-1">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carros;
