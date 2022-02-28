import React from "react";
import {
    Outdoor,
    Header,
    Table,
    Presentation,
    Button,
    ModelCar,
} from './banner.styles';

import {
    Arguments,
    HeaderArgs,
    TableArgs,
    GroupImage,
    GroupText,
    ButtonContact,
} from './arguments.styles.js'

export function Home(){
    return (
        <>
        <Outdoor Banner="https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <Header>
                <a href="#">RALLY <span>4</span>RENT</a>
                <div className="menu">
                    <nav><a href="#">PRODUTOS</a></nav>
                    <nav><a href="#">SERVIÇOS</a></nav>
                    <nav className="active"><a href="#">CONTATO</a></nav>
                </div>
            </Header>

            <Table>
                <Presentation>
                    <h1>PREPARESE PARA UMA INCRÍVEL AVENTURA</h1>
                    <p>
                        Somos uma empresa que aluga veículos todo-o-terreno 
                        de alta qualidade com ênfase no desempenho.
                    </p>

                    <Button>
                        VER CATALOGO
                    </Button>
                </Presentation>

                <ModelCar>
                    <span></span>
                    <h2>Toyota Hilux</h2>
                </ModelCar>
            </Table>
        </Outdoor>

        <Arguments>
            <HeaderArgs>
                <div>
                    <h2>veículos todo-o-terreno com alta 
                        qualidade com ênfase no desempenho
                    </h2>
                </div>
                <div>
                    <p>
                        Fornecemos carros para qualquer obstáculo 
                        que você queira enfrentar, de desertos áridos 
                        a montanhas geladas. Estamos prontos para
                        preparar o melhor para você
                    </p>
                </div>
            </HeaderArgs>

            <TableArgs>
                <GroupImage Image={"https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
                <GroupText>
                    <h2>
                        Com o veículo certo, você pode explorar e 
                        alcançar sua liberdade onde quiser
                    </h2>
                    <p>
                        We provide Offroad car to rent. 
                        If you want to explore the world, 
                        get lost in nature, 
                        ride deep into the desert or just 
                        want to drive like a maniac then our off-
                    </p>
                    <ButtonContact>Contact Us</ButtonContact>
                </GroupText>
            </TableArgs>

            <TableArgs>
                <GroupText>
                    <h2>
                        Com o veículo certo, você pode explorar e 
                        alcançar sua liberdade onde quiser
                    </h2>
                    <p>
                        We provide Offroad car to rent. 
                        If you want to explore the world, 
                        get lost in nature, 
                        ride deep into the desert or just 
                        want to drive like a maniac then our off-
                    </p>
                    <ButtonContact>Contact Us</ButtonContact>
                </GroupText>
                <GroupImage Image={"https://images.pexels.com/photos/1149055/pexels-photo-1149055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
            </TableArgs>

            <TableArgs>
                <GroupImage Image={"https://www.autoo.com.br/fotos/2020/8/1280_960/toyota2_27082020_33818_1280_960.jpg"}/>
                <GroupText>
                    <h2>
                        Com o veículo certo, você pode explorar e 
                        alcançar sua liberdade onde quiser
                    </h2>
                    <p>
                        We provide Offroad car to rent. 
                        If you want to explore the world, 
                        get lost in nature, 
                        ride deep into the desert or just 
                        want to drive like a maniac then our off-
                    </p>
                    <Button>VER CATALOGO</Button>
                </GroupText>
            </TableArgs>

        </Arguments>

        </>


    )
}
