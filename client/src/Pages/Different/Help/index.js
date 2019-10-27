import React, { useEffect } from "react";
import "./style.css";

/* Const */
import { PAGES_URL } from "Const/pages";

/* Function */
import { changePage } from "Requsets/function";

/* Components */
import Expansion from "./Expansion";

const Help = () => {
  useEffect(() => {
    changePage(PAGES_URL.help);
  }, []);

  const questions = [
    {
      title: "Чем я могу помочь",
      text: "Пиши мне, если будет желание - найдём какую-либо работу."
    },
    {
      title: "Что это такое?",
      text: "Это мой проектик, на котором я точу скил."
    },
    {
      title: "Что будет дальше?",
      text: "Масштабируемость, оптимизация, развитие!"
    },
    {
      title: "Чем я могу помочь",
      text: "Пиши мне, если будет желание - найдём какую-либо работу."
    },
    {
      title: "Что это такое?",
      text: "Это мой проектик, на котором я точу скил."
    },
    {
      title: "Что будет дальше?",
      text: "Масштабируемость, оптимизация, развитие!"
    },
    {
      title: "Чем я могу помочь",
      text: "Пиши мне, если будет желание - найдём какую-либо работу."
    },
    {
      title: "Что это такое?",
      text: "Это мой проектик, на котором я точу скил."
    },
    {
      title: "Что будет дальше?",
      text: "Масштабируемость, оптимизация, развитие!"
    },
    {
      title: "Чем я могу помочь",
      text: "Пиши мне, если будет желание - найдём какую-либо работу."
    },
    {
      title: "Что это такое?",
      text: "Это мой проектик, на котором я точу скил."
    },
    {
      title: "Что будет дальше?",
      text: "Масштабируемость, оптимизация, развитие!"
    }
  ];

  return (
    <section>
      <h3 className="title_h3 title_pages">Помощь</h3>
      <textarea placeholder="Введите ваш вопрос..." className="help_textarea" />
      <div className="send_ask">
        <button className="blue_button">Отправить вопрос</button>
        <p className="status_p">В разработке</p>
      </div>
      <h3 className="title_h3 title_pages">Частые вопросы</h3>
      <div className="help_faq">
        {questions.map((question, i) => (
          <Expansion index={i} key={i} question={question} />
        ))}
      </div>
    </section>
  );
};

export default Help;
