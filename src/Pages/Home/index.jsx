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
    Landscapes,
    LandscapeImage
} from './arguments.styles.js';

import {
    CallUserAction,
    HeaderCall,
    CarrouselCall,
    Slider,
    MiddleTexts,
    IndicatedLandscapes,
    Land,
    ButtonCallUser,
    Footer,
    ContainerSocialMedia,
    LogoInc,
    RequiredInformation,
} from './callActions.styles.js'

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

                <Landscapes>
                    <LandscapeImage Image={"https://images.unsplash.com/photo-1599522316015-cec257031c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}/>
                    <LandscapeImage Image={"https://images.unsplash.com/photo-1548501461-e2399cb271ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2567&q=80"}/>
                    <LandscapeImage Image={"https://images.unsplash.com/photo-1518203441944-e9578e4b1635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"}/>
                    <LandscapeImage Image={"https://images.unsplash.com/photo-1601784531610-cc802e1db92e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}/>
                    <LandscapeImage Image={"https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"}/>
                </Landscapes>

            </Arguments>

            <CallUserAction>
                <HeaderCall>
                    <h1>Explore como quiser</h1>
                    <p>
                        O mundo é vasto, então o que você está esperando, 
                        vamos explorar e descobrir vários tipos de maravilhas neste planeta
                    </p>
                </HeaderCall>

                <CarrouselCall>
                    <Slider Image={"https://images.squarespace-cdn.com/content/v1/5b635163e74940d037d34802/1534812549394-WBLPJBMS8O960KYADQPM/HIL0006b_15-2.jpg?format=2500w"}/>
                </CarrouselCall>

                <MiddleTexts>
                    <h2>viva do jeito que você sonha, explore o quanto quiser</h2>
                    <p>
                        Com recomendações de veículos e também uma escolha de destinos turísticos, 
                        você só precisa se preparar mentalmente e a si mesmo porque tem a comodidade
                        de viver seu sonho agora
                    </p>
                </MiddleTexts>

                <IndicatedLandscapes>
                    <Land Image={"https://images.squarespace-cdn.com/content/v1/5b635163e74940d037d34802/1534812538850-R547MS91WSFEA8D5K9UD/HIL0004a_15.jpg?format=2500w"}></Land>
                    <Land Image={"https://images.squarespace-cdn.com/content/v1/5b635163e74940d037d34802/1534812551952-OU4ET3O7ZQPVN92ULH4V/HIL0001a_15.jpg?format=2500w"}/>
                </IndicatedLandscapes>

                <ButtonCallUser>
                    <button>Explore Mais</button>
                </ButtonCallUser>
            </CallUserAction>

            <Footer>
                <ContainerSocialMedia>
                    <LogoInc><span>4</span>Rent inc.</LogoInc>
                    <h3>NOS SIGA EM NOSSAS REDES</h3>
                    <div>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-apple"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                    </div>
                </ContainerSocialMedia>
                <ul>
                    <li>Serviços</li>
                    <li>Carreira</li>
                    <li>Estrategia</li>
                    <li>Investir</li>
                </ul>
                <ul>
                    <li>Serviços</li>
                    <li>Carreira</li>
                    <li>Estrategia</li>
                    <li>Investir</li>
                </ul>
                <ul>
                    <li>Serviços</li>
                    <li>Carreira</li>
                    <li>Estrategia</li>
                    <li>Investir</li>
                </ul>
            </Footer>

            <RequiredInformation>
                <h4>@4RENT TM, ALL RIGTHS RESERVED</h4>
                <div>
                    <h4>Cookie Policy</h4>
                    <h4>Legal Notice</h4>
                    <h4>Cookie Consent options</h4>
                </div>
            </RequiredInformation>
        </>


    )
}