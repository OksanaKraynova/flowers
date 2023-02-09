import React from 'react';
import styled from 'styled-components'

const Add = () => {
    return (
        <Wrapper>
           <h5 className='title-pink'>Дополнительно к заказу:</h5> 
           <Row>
                <Card className='blur'>
                    <span className='green'>Удобрения для <br /> срезанных цветов</span>
                    <p>При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас</p>
                </Card>
                <Card className='blur'>
                    <span className='green'>подпишем<br />  открытку</span>
                    <p>В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку</p>
                </Card>
                <Card className='blur'>
                    <span className='green'>Фото букета <br /> перед отправкой</span>
                    <p>В примечании к заказу укажите об этом и мы отправим фото готового букета перед доставкой. В праздничные дни в связи с большой загруженностью такой возможности нет</p>
                </Card>
                <Card className='blur'>
                    <span className='green'>Букет-сюрприз</span>
                    <p>Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом в примечании к заказу</p>
                </Card>
           </Row>
        </Wrapper>
    );
};

export default Add;

const Wrapper =styled.section`
    margin-top: 80px;
    @media(max-width: 1109px){
        margin-top: calc(40px + (80 - 40) * ((100vw - 768px) / (1110 - 768)));
    }
    @media(max-width: 768px){
                margin-top: 40px;
    }
    h5{
        text-align: center;
    }
`

const Row =styled.div`
    display: flex;
    margin-top: 45px;
    gap: 30px;
    @media(max-width: 1109px){
        flex-wrap: wrap;
    }
    @media(max-width: 768px){
        margin-top: 35px;
    }
`

const Card = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 237px;
flex: 255px;
padding: 87px 20px 0px 20px;
line-height: 1.5;
letter-spacing: 0.06em;
position: relative;
@media(max-width: 1109px){
    flex: 48%;
    height: 180px;
}
@media(max-width: 768px){
    flex: 45%;
}
@media(max-width: 549px){
    flex: 100%;
}
&:before{
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #000;
    top: -15px;
    left: 45% ;
    @media(max-width: 1109px){
        left: 48% ;
    }
    @media(max-width: 768px){
        left: 46% ;
    }
}
span{
    text-transform: uppercase;
    position: absolute;
    top: 30px;
    right: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    /* margin: 0 auto; */
    text-align: center;
}
    p{
        text-transform: none;
    }
`