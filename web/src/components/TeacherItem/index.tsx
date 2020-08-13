import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/wkQ__Q_GPeGWNdjPN0CNk3qrtPaThRS3VekPjVhj3bScgVw0HSmsa6i_9rNX3vnucFIjIwsuNKUBtz25KwyCGhQ-LbAM4ymsTkEZZPMi55I-5RGUU4QsdW1YcBM6TK8A_xy_xrhQZkEHqbcqKAMapZq1J3IzXZoB2KHRkfXeOYUP1NBaZPG8s3fld8u0wagBCkn9aE6gaRQuU9BGWuLMe1du2oKhPUT-hDF-ahm42YizqMCGJfPuDwlOjzDBjdic506FssHbJLhBNaQCgFICrZxpmVNDVakUKf_Z_0c1sheCZdaHI8fBSyw1v2AW669VMMi049c_w41T_os9Pob5hOIV03JcDfoO2XxR6mkt8m0DJvewfTHs9EkcYqmFOhCc5df46ITML3M_2q63zqybE6fnS2ncjQS3tnWm8yRlmHoR9GgtqxTjv5CR0YKcCK5hyqMnFChABqh_mcrBi0rcl798fdPAWb-FqFPbNiXgSSja_bqimIbKtpoPzbVD0wjCICaJ6lrYlrf0BPatGgHkqQXRDd_jgGNyc7XlqHwc4baY-gw7GasQV9MD0kv9UHi6hySEXSm2O3v6pAW7v32FY6P6OyXa0R_wtREjusN67fzW2d5zn1hdvtZwvlKxekSuvk5O6zRUTYoXaCHVdx6hQdK6_RRo3onFpywjCWVfKeGYza2p7MJwTyNcB2RLRw=w552-h982-no?authuser=0" alt="Jackson Marcony"/>
                <div>
                    <strong>Jackson Marcony</strong>
                    <span>Developer</span>
                </div>
            </header>

            <p>Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir computadores de alunos da rocketseat e mostrar um belo cardapio de mortes subtas de computadores.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;