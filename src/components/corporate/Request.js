import React from 'react';
import styled from 'styled-components'

const Request = () => {
    return (
        <>
            <Span className='green'>заполните заявку:</Span>
            <Form action='#'>
                <FormContainer>
                    <label className='form-label'>

                        <span>Наименование организации</span><input type="text" placeholder='Введите наименование вашей организации' className='form-input' /></label>
                    <label className='form-label'>
                        <span>УНП</span>
                        <input type="text" placeholder='УНП' className='form-input' /></label>
                    <label className='form-label'>
                        <span>Почтовый адрес</span>
                        <input type="text" placeholder='Введите почтовый адрес' className='form-input' /></label>
                    <label className='form-label'>
                        <span>Расчетный счет</span>
                        <input type="text" placeholder='Введите номер расчетного счета' className='form-input'  /></label>
                    <label className='form-label'>
                        <span>Контактное лицо</span>
                        <input type="text" placeholder='Введите имя контактного лица' className='form-input' /></label>

                    <label className='form-label'>
                        <span>Код банка</span>
                        <input type="text" placeholder='Код банка' className='form-input' /></label>
                    <label className='form-label'>
                        <span>Контактный номер телефона</span>
                        <input type="tel" placeholder='+7 (977) 777-77-77' className='form-input' /></label>
                    <label className='form-label'>
                        <span>Предполагаемое количество заявок в месяц</span>
                        <input type="text" placeholder='Введите предполагаемое количество заявок в месяц'className='form-input' /></label>
                    <label className='form-label'>
                        <span>Стоимость букета сотруднику (если разная – указать)</span>
                        <input type="text" placeholder='Укажите стоимость букета сотруднику' className='form-input' /></label>
                    <label>
                    </label>
                    <label className='form-label'>
                        <span>Адрес электронной почты</span>
                        <input type="email" placeholder='Укажите ваш адрес электронной почты' className='form-input' /></label>
                </FormContainer>
                <button type='submit' className='link link__green'>отправить</button>
                <p>Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <a>Политикой конфиденциальности</a></p>
            </Form>
        </>
    );
};

export default Request;


const Span = styled.span`
    margin: 60px 0px 20px 0px;
    line-height: 30px;
    font-size: 20px;
    letter-spacing: 0.04em;
    display: inline-block;
`
const Form = styled.form`
    button{
        width: 255px;
        margin: 40px 0 10px 0;
        @media(max-width: 768px){
margin-top: 30px;
        }
    }
    p{
        text-transform: none;
        max-width: 312px;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.02em;
        a{
            font-family: 'Roboto Condensed';
color: #8B3131;
        }
    }
`

const FormContainer = styled.div`
display: flex;
    row-gap: 30px;
    column-gap: 20px;
    flex-wrap: wrap;
    @media(max-width: 1109px){
        row-gap: 20px;
    }
    label{
        flex: 0 0 49%;
               @media(max-width: 1109px){
            flex: 0 1 48%;
           
        }
        @media(max-width: 768px){
            flex: 1 1 100%;
        }
        input{
            margin-top: 4px;
        }
    }
`