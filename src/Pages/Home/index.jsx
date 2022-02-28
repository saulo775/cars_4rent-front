import React from "react";
import {
    Container,
    Header,
    Table,
    Presentation,
    Button,
    ModelCar,
} from './styles';

export function Home(){
    return (
        <Container Banner="https://images.pexels.com/photos/1149140/pexels-photo-1149140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
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
                    <div></div>
                    <h2>Toyota Hilux</h2>
                </ModelCar>
            </Table>
        </Container>
    )
}
