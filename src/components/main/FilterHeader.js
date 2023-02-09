import React from 'react';
import styled from 'styled-components'

const FilterHeader = () => {
    return (
        <Wrapper>
            <a>Популярное</a>
            <a>Сборны букеты</a>
            <a>монобукеты</a>
            <a>розы</a>
            <a>свадебные</a>
            <a>Композиции из цветов к коробке</a>
            <a>интерьерные композиции</a>
            <a>осенние</a>
            <a>индивидуальный букет</a>
            <a>сухоцветы</a>
            <a>горшечные</a>
            <a>дополнительно</a>
        </Wrapper>
    );
};

export default FilterHeader;
const Wrapper = styled.div`
    padding: 30px 20px 10px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    width: 260px;
    display: flex; 
    flex-direction: column;
    a + a{
        margin-top: 4px;

    }
    a{
        line-height: 1.5;
        letter-spacing: 0.04em;
        &:hover{
            text-decoration: underline;
            color: #43FFD2;
        }
    }
`