import { useState } from "react";
import Carros from "../Carros/Carros";
import Carro2 from "../../img/pexels-cesar-sanchez-2149834931-30816058.jpg";
import Carro3 from "../../img/pexels-mikebirdy-2365572.jpg";
import Carro1 from "../../img/cls preto.webp";

import "../Home/Home.css";
function Homes() {
  const [ativo, setAtivo] = useState(0);

  const slides = [
    {
      titulo:
        "Mercedes-Cls Preto, O Mercedes CLS preta é conhecido pela sua elegância e esportividade, combinando o design de coupé com o conforto de um sedã de quatro portas. A cor preta, que é uma opção popular para a CLS, realça as linhas fluidas e o estilo dinâmico do carro, conferindo-lhe um ar de sofisticação e exclusividade.",
      conteudo: <img className="rounded-t-1xl w-200" src={Carro1} alt="" />,
      valor: "R$ 350.000,00",
      Info: "Quero saber mais",
    },
    {
      titulo: "Camaro Vermelho,O Chevrolet Camaro vermelho, especialmente o modelo SS, é conhecido pela sua potência e design esportivo. As principais características incluem um motor V8 de 6.2L, transmissão automática de 10 velocidades, tração traseira, e uma velocidade máxima que pode chegar a 290 km/h. ",
      conteudo: <img className="rounded-t-1xl w-200 " src={Carro2} />,
      valor: "R$ 250.000,00",
      Info: "Quero saber mais", 
    },
    {
      titulo: "Mercedes-Benz Gts, A Mercedes-Benz AMG GT, na sua versão amarela, é um carro de desporto de luxo com um motor V8 biturbo de 4.0 litros, que gera 585 cv de potência e 71,4 kgf.m de torque. A velocidade máxima é de 318 km/h, e a aceleração de 0 a 100 km/h é feita em 3,6 segundos. ",
      conteudo: <img className=" rounded-t-1xl w-200" src={Carro3} />,
      valor: "R$ 1.200.000,00",
      Info: "Quero saber mais",
    },
  ];
  const ProximosSlide = () => {
    setAtivo((ativo + 1) % slides.length);
  };
  const slideAnterior = () => {
    setAtivo((ativo - 1 + slides.length) % slides.length);
  };
  return (
    <div>
      <h1 className="text-center text-2xl ">Ofertas </h1>
      <div className="flex justify-center items-center">
        <div className="imagens">
          <p className=" w-100 mt-4">{slides[ativo].conteudo}</p>
          <div className="botoes flex justify-center mb-5">
            <button
              className=" text-white p-2    bg-black w-50 "
              onClick={slideAnterior}
            >
              Anterior
            </button>
            <button
              className=" text-white   bg-black p-2 w-50"
              onClick={ProximosSlide}
            >
              Próximo
            </button>
          </div>
        </div>
        <div className="flex-col justify-center items-center h-70 w-100">
          <h3 className="text-1xl w-100 text-black text-center p-2 h-75 ">
            {slides[ativo].titulo} <p>{slides[ativo].valor}</p>{" "}
            <button className="bg-red-600 text-white p-2 rounded-2xl ml-3 mt-6">
              {slides[ativo].Info}
            </button>
          </h3>{" "}
        </div>
      </div>
      <Carros/>
    </div>
  );
}

export default Homes;
