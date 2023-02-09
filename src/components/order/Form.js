import React from 'react';
import styled from 'styled-components'

const Form = () => {
    return (


        <FormWrapper>
            <Block className='block'>
                <p className='green'>Контактные данные</p>
                <label className='form-label'>
                    <span>Ваше имя*</span>
                    <input className='form-input' type="text" placeholder='Введите ваше имя' />
                </label>
                <label className='form-label'>
                    <span>Ваш телефон*</span>
                    <input type="tel" placeholder='+7 (977) 777-77-77' className='form-input' />
                </label>
                <label className='form-label'>
                    <span>Ваш e-mail*</span>
                    <input type="email" placeholder='Введите вашу почту' className='form-input' />
                </label>
                <label className='form-label'>
                    <span>Телефон получателя (необязательно)</span>
                    <input type="tel" placeholder='+7 (977) 777-77-77' className='form-input' />
                </label>
                <label className='form-label'>
                    <span>Имя получателя (необязательно)</span>
                    <input type="text" placeholder='Введите имя получателя' className='form-input' />
                </label>
                <label className='form-label'>
                    <span>Комментарий к заказу</span>
                    <input type="text" placeholder='Примечания к вашеу заказу, особые пожелания отделу доставки' className='form-input' />
                </label>
            </Block>
            <Block className='block'>
                <p className='green'>Доставка</p>
                <LabelRadio className='radio'>
                    <input type='radio' name="delivery" value="myself" />
                    <span className='fake-radio'>Самовывоз</span>
                </LabelRadio>
                <LabelRadio className='label-radio'>
                    <input type='radio' name="delivery" value="courier" />
                    <span className='fake-radio'>Доставка курьером</span>
                </LabelRadio>
                <label className='form-label'>
                    <span>Город*</span>
                    <input type="text" placeholder='Укажите город' className='form-input' />
                </label>
                <label className='form-label'>
                    <span>Улица*</span>
                    <input type="text" placeholder='Введите улицу' className='form-input' />
                </label>
                <Row>
                    <label className='form-label'>
                        <span>Корп/стр</span>
                        <input type="text" placeholder='Корп/стр' className='form-input' />
                    </label> <label className='form-label'>
                        <span>Дом</span>
                        <input type="text" placeholder='Дом ' className='form-input' />
                    </label>
                    <label className='form-label'>
                        <span>Кв/офис</span>
                        <input type="text" placeholder='Кв/офис ' className='form-input' />
                    </label>
                </Row>
                <Cost>Стоимость доставки 0 ₽</Cost>
            </Block>
            <Block className='block'>
                <p className='green'>Оплата</p>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="card" />
                    <span className='fake-radio'>Банковская карта</span>
                </LabelRadio>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="cash" />
                    <span className='fake-radio'>Наличными</span>
                </LabelRadio>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="applepay" />
                    <span className='fake-radio'>Apple pay</span>
                </LabelRadio>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="googlepay" />
                    <span className='fake-radio'>Google pay</span>
                </LabelRadio>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="cript" />
                    <span className='fake-radio'>Криптовалюта</span>
                </LabelRadio>
                <LabelRadio className='radio'>
                    <input type='radio' name="payment" value="account" />
                    <span className='fake-radio'>С расчетного счета</span>
                </LabelRadio>
            </Block>
            <Block className='block'>
                <div className='title-green'><p >Общая сумма заказа </p><span className='total'>334.00 ₽</span></div>
                <div>Скидка = 0 ₽</div>
                <div>Доставка = 0 ₽</div>
            </Block>
            <button className='link link__green'>К оплате</button>
            <p className='assent'>Нажимая на кнопку «К Оплате», я даю свое согласие на обработку персональных данных, в соответствии с <span className='pink'>Политикой конфиденциальности</span>, а так же ознакомлен с условиями оплаты и доставки</p>
        </FormWrapper>

    );
};

export default Form;

const FormWrapper = styled.form`
   width: 100%;
    @media(min-width: 849px){
        max-width: 540px;
    }
    .block + .block{
        margin-top: 60px;
    }
    button{
        width: 255px;
        margin-top: 30px;
    }
    .assent{
        font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02em;
    margin-top: 10px;
    max-width: 295px;
    span{
        text-decoration: underline;
    }
    }
`

const Block = styled.div`
    p{
        text-transform: uppercase;
    }
    label{
        margin-top: 20px;
        }
    input{
        margin-top: 4px;
      
    }
    .total{
        /* margin-left: 30px; */
        white-space: nowrap;
    }
    div{
        margin-top: 10px;
        text-transform: uppercase;
    }
    .title-green{
        display: flex;
        justify-content: space-between;
        @media(max-width: 369px){
            gap: 20px;
        }
    }
`

const LabelRadio = styled.label`
    display: flex;
    span{
        position: relative;
       padding-left: 36px;
       color:  #353535;
        &:after{
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;  
            border-radius: 50%;     
            border: 1px solid #353535; 
            left: 0;
        }
    }
    input{
        width: 1px;
        height: 1px;
        opacity: 0;
        &:checked + .fake-radio{
            color: #fff;
            &:after{
                border-color: #fff; 
            }
            &:before{
                content: '';
                position: absolute;
                width:8px;
                height: 8px;  
                border-radius: 50%; 
                background-color: #fff;
                left: 4px;
                top: 4px;
            }
        }
      
    }
`

const Row = styled.div`
    display: flex;
    gap: 30px;
    @media(max-width: 549px){
        flex-wrap: wrap;
        gap: 20px;
    }
    label{
        @media(max-width: 549px){
        flex: 0 0 47%;
    }
    @media(max-width: 354px){
        flex: 0 0 100%;
    }
    }
`
const Cost = styled.p`
    color: #555555;
    margin-top: 20px;
`