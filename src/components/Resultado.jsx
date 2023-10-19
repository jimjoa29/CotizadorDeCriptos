import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
  margin-bottom: 100px;
  
`;

const Image = styled.img`
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    

`

const Texto = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {

    console.log(resultado)

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        resultado;

    return (
        <Contenedor>

            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="imagen cripto" />

            <div>
                <Precio>
                    El Precio es de: <span>{PRICE}</span>
                </Precio>
                <Texto>
                    Precio más alto del día: <span>{HIGHDAY}</span>
                </Texto>
                <Texto>
                    Precio más bajo del día: <span>{LOWDAY}</span>
                </Texto>
                <Texto>
                    Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
                </Texto>
                <Texto>
                    Última actualización: <span>{LASTUPDATE}</span>
                </Texto>
            </div>
        </Contenedor>
    );
};

export default Resultado;
