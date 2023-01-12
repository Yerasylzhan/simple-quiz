import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Кто из этих персонажей не дружит с Гарри Поттером?',
    variants: ['Рон Уизли', 'Невилл Лонгботтом', 'Драко Малфой', 'Гермиона Грейнджер'],
    correct: 2,
  },
  {
    title: 'Как назывался корабль капитана Джека Воробья в "Пиратах Карибского моря"?',
    variants: ['Мародер', 'Черная Жемчужина', 'Черный питон', 'Слизерин'],
    correct: 1,
  },
  {
    title: 'Кто из этих персонажей не входит в группу друзей из сериала "Друзья"?',
    variants: [
      'Рэйчел',
      'Это функцияДжоуи',
      'Гюнтер',
      'Моника'
    ],
    correct: 2,
  },
  {
    title: 'Сколько существует книг о Гарри Поттере?',
    variants: ['7', '8', '6', '10'],
    correct: 0,
  },
  {
    title: 'Кто придумал Шерлока Холмса?',
    variants: ['Агата Кристи', 'Артур Конан Дойл', 'Эдгар Аллан По', 'Стиг Ларссон'],
    correct: 1,
  },
  {
    title: 'В каком году вышел фильм "Титаник"?',
    variants: ['1997', '1998', '1999', '2000'],
    correct: 0,
  },

];

function Result({marking, congrat, setCongrat}) {
  if (marking===questions.length) {
    setCongrat('Невероятно!')
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{congrat} Ваш результат: {marking}/{questions.length} </h2>
      <a href='/'><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${Math.round(step / questions.length * 100)}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (<li 
        onClick={() => onClickVariant(index)}
        key={text}>{text} 
        </li>))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [marking, setMarking] = React.useState(0);
  const [congrat, setCongrat] = React.useState('Есть к чему стремиться.');

  const onClickVariant = (index) => {
    setStep(step+1);
    if(index === question.correct) {
      setMarking(marking+1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length
      ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
      : (<Result marking={marking} congrat={congrat} setCongrat={setCongrat} />)
      }
    </div>
  );
}

export default App;
