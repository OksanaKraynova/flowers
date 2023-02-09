import React from 'react';
import styled from 'styled-components'

const One = () => {
    return (
        <>
            <Nav>Главная / корпоративным клиентам</Nav>
            <h2 className='title'>Букеты</h2>
            <Description>поздравления для <br /> <span>Ваших работников</span></Description>
            <Block>Если у Вас большое количество сотрудников (или не очень) и вы устали помнить о каждом их Дне рождении и как чем поздравить, то <span className='green'>мы можем делать это за Вас.</span></Block>
            <Content>
                <p>Одним вариантом сотрудничества является предоставление нам перечня сотрудников с Днями их рождений и мы уже самостоятельно связываемся с каждым, изготавливаем букет либо композицию и доставляем в удобное время сотруднику либо по месту работы либо по месту жительства, так как в настоящее время многие сотрудники продолжают выполнять работу удалённо либо находятся на больничном или в отпуске.</p>
                <p>Другим вариантом сотрудничества является заказ букетов самостоятельно представителем организации за день до нужной даты.</p>
                <p>Так вы <span className='green'>экономите время </span>остальных сотрудников на сбор денег на поиск подарка и доставку его получателю, а также оберегаете себя от риска пропустить кого-либо из важных организации людей, а именно так Вы проявляете заботу и внимание к сотрудникам для того, чтобы и к делам Вашей организации они относились со всей внимательностью и также не пропускали важные дни.</p>
            </Content>
            <Text>Букеты могут изготавливаться в фирменном цвете организации и есть возможность делать поздравления на Вашей фирменной открытке, которую мы можем изготовить сами.</Text>
            <Cost className='green'>Стоимость одного букета не менее 60 рублей.</Cost>
            <Table>
                <Header className='green'>
                    <div>Количество заявок в месяц</div>
                    <div>Приятные бонусы</div>
                </Header>
                <Body>
                    <Row>
                        <span>1-2</span>
                        <p>Стоимость одной доставки по Минску – 10 рублей, за пределы МКАД – от 20 рублей</p>
                    </Row>
                    <Row>
                        <span>3-10</span>
                        <p>Доставка бесплатно<br /> Букет-подарок руководителю в его День рождения</p>
                    </Row>
                    <Row>
                        <span>Более 10</span>
                        <p>Доставка бесплатно Букет-подарок руководителю в его День рождения Праздничная ель перед Новым годом</p>
                    </Row>
                </Body>
            </Table>
            <Steps>
                <div className='hide'></div>
                <div>
                <h4 className='green'>этапы работы:</h4>
                <ul>
                    <li>1. Заполнение заявки   </li>
                    <li>2. Подписание договора</li>
                    <li>3. Вручение цветов</li>
                    <li>4. Отчет о доставленных заказах</li>
                    <li>5. оплата</li>
                </ul>
                </div>
            </Steps>
            <Text>Если у Вас единичный заказ, то можете выбрать букет в каталоге либо заказать индивидуальный букет и указать его стоимость, а при оформлении заказа в корзине указать, что оплата будет производиться с расчётного счёта организации.</Text>
        </>
    );
};

export default One;


const Nav = styled.span`
    font-size: 12px;
    line-height: 1.5;
    `

const Table = styled.div`
        max-width: 960px;
        padding: 0 40px;
        margin: 90px 0 100px 0;
        line-height: 1.5;
        @media(max-width: 1109px){
            margin-top: calc(20px + (90 - 20) * ((100vw - 768px) / (1110 - 768)));
            margin-bottom: calc(60px + (100 - 60) * ((100vw - 768px) / (1110 - 768)));
            font-size: calc(20px + (40 - 20) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin: 20px 0px 60px 0px;
            font-size: 20px;
            padding: 0;
        }
        `
const Header = styled.div`
    font-size: 20px;
   
    letter-spacing: 0.04em;
    display: flex;
    margin-bottom: 35px;
    div{
        flex: 50%;
        text-align: center;
        @media(max-width: 998px){
            height: 60px;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
            font-size: 14px;
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`
const Body = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
    
`

const Row = styled.div`
 display: flex;
 text-transform: none;
 gap: 30px;
 span, p{
        flex: 50%;
        @media(max-width: 998px){
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
            font-size: 14px;
            padding:10px 6px;
        }
    }
    span{
        text-align: center;

        @media(max-width: 998px){
            display: inline-flex;
            align-items: center;
            justify-content: center;
            
        }
    }
    
    
`

const Steps = styled.div`
text-transform: uppercase;
max-width: 990px;
display: flex;
padding-bottom: 80px;
        @media(max-width: 1109px){
            padding-bottom: calc(0px + (80 - 0) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width:768px){
            padding-bottom: 0;
        }
.hide {
    @media(max-width: 768px){
        display: none;
    }
}
div{
    flex: 50%;
}
h4{
    font-family: 'Cormorant';
    font-weight: 400;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin-bottom: 40px;
   
        @media(max-width: 768px){
            font-size: 20px;
            margin-bottom: 20px;
        }
}
ul{
    position: relative;
    padding-top: 21px;
    line-height: 1.5;
    @media(max-width: 768px){
           padding-top: 11px;
        }
    &:before{
        content: '';
        position: absolute;
        width: 60px;
        height: 1px;
        background-color: #43FFD2;
        top: 0;
        left: 0;
    }
}
`
const Text = styled.p`
          font-size: 40px;
        line-height: 1.2;
        font-family: 'Cormorant';
        letter-spacing: 0.02em;
        margin-top: 100px;
        @media(max-width: 1109px){
            margin-top: calc(40px + (100 - 40) * ((100vw - 768px) / (1110 - 768)));
            font-size: calc(20px + (40 - 20) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin-top: 40px;
            font-size: 20px;
        }
    `

const Description = styled(Text)`
        font-size: 40px;
        line-height: 1.2;
        font-family: 'Cormorant';
        margin: 0px 0px 0px 90px;
        letter-spacing: 0.02em;
                span{
            margin-left: 110px;
            display: inline-block;
            @media(max-width: 1109px){
                margin-left: calc(40px + (110 - 40) * ((100vw - 768px) / (1110 - 768)));
            }
            @media(max-width: 768px){
margin-left: 40px;
            }
        }
        @media(max-width: 1109px){
            margin-left: calc(50px + (90 - 50) * ((100vw - 768px) / (1110 - 768)));
            font-size: calc(20px + (40 - 20) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin-left: 50px;
            font-size: 20px;
        }
    `

const Block = styled.div`
        margin: 100px 0;
        font-weight: 300;
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 0.04em;
        max-width: 765px;
        @media(max-width: 1109px){
                margin-top: calc(40px + (110 - 40) * ((100vw - 768px) / (1110 - 768)));
                margin-bottom: calc(40px + (110 - 40) * ((100vw - 768px) / (1110 - 768)));
                font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
            }
            @media(max-width: 768px){
                margin: 40px 0;
                font-size: 14px;
            }
    `

const Content = styled.div`
    text-transform: none;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    max-width: 736px;
    margin-left: 90px;
    @media(max-width: 1109px){
            margin-left: calc(0px + (90 - 0) * ((100vw - 768px) / (1110 - 768)));
            font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            margin-left: 0px;
            font-size: 14px;
        }
    p + p{
        margin-top: 20px;
    }
`

const Cost = styled.p`
    font-size: 20px;
    margin-top: 20px;
    @media(max-width: 1109px){
                    font-size: calc(14px + (20 - 14) * ((100vw - 768px) / (1110 - 768)));
        }
        @media(max-width: 768px){
            font-size: 14px;
        }
`