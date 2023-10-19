import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMoneda from "../hooks/useSelectMoneda";
import Error from "./Error";

import { monedas } from '../data/moneda'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
  }
`;

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMoneda('Elige tu moneda', monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMoneda('Elige tu Cripmoneda', criptos);

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD'

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCripto = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCripto)

    }
    consultarApi();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([moneda, criptomoneda].includes('')) {

      setError(true)
      return
    }

    setError(false)
    setMonedas({
      moneda,
      criptomoneda
    })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >

        <SelectMonedas />
        <SelectCriptomonedas />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
