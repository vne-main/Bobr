import React, {useEffect} from 'react';
import './style.css';

/* Function */
import {changePage} from "../../../Requsets/function";

const Advertising = () => {

    useEffect(() => {
        changePage('advertising')
    }, [])
    const rate =  [
        {
            title: "Максимальный тариф",
            price: "25000",
            text: "Добавление вашего продукта во вкладку \"Спонсоры Бобра\" на 1 месяц. Указание ваших\n" +
                "контактов на основании прав рекламы в рамках поддерживающего продукта. Размещение 5\n" +
                "постов в месяц в топ 10.",
            type: "max"
        },
        {title: "Средний тариф", price: "20000", text: "Какой-то текст, который будет отображаться в качестве описания предложенного рекламного тарифа", type: ""},
        {title: "Умеренный тариф", price: "15000", text: "Какой-то текст, который будет отображаться в качестве описания предложенного рекламного тарифа", type: ""},
        {title: "Минимальный тариф", price: "10000", text: "Какой-то текст, который будет отображаться в качестве описания предложенного рекламного тарифа", type: ""},
    ];

    return (
        <section>
            <h3 className="title_h3 title_pages">Реклама</h3>
            <div className="adv_container">
                <p>Ниже представлены основные рекламные предложения,
                    которыми вы можите воспользоваться в случае необходимости
                </p>
                {rate.map((el, i) => {
                    const {title, price, text} = el;
                    return (
                        <aside className="adv_type" key={i}>
                            <div className="adv_name">
                                <h4 className="title_h3">{title}</h4>
                                <p>{price} руб</p>
                            </div>
                            <div className="adv_body">
                                <p>{text}</p>
                                <button className="blue_button">Заказать</button>
                            </div>
                        </aside>
                    )
                })}
            </div>
        </section>
    );
};

export default Advertising;