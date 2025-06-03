import React from "react";
import "../Cabecario/Header.css";
import Imagem1 from "../../img/—Pngtree—auto logo car_4236175.png";
function Header() {
  return (
    <div>
      <header className=" text-2xl text-whiteh-10  bg-red-700 h-15  ">
        <ul className="flex justify-between items-center h-15 text-base mr-15">
          <img
            className="w-20 h-18 ml-20 "
            src={Imagem1}
            alt="LogotipoEmpresa"
          />
          <li className="cursor-pointer text-white  ">Comprar</li>
          <li className="cursor-pointer text-white">Vender</li>
          <li className="cursor-pointer text-white ">Contatos</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
