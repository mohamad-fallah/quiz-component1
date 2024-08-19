import React from "react";
import "./Quiz.css";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          questionText: "پایتخت ایران کدام شهر است؟",
          answerOptions: [
            { answerText: "کرج", isCorrect: false },
            { answerText: "شیراز", isCorrect: false },
            { answerText: "تهران", isCorrect: true },
            { answerText: "اصفهان", isCorrect: false },
          ],
        },
        {
          questionText: "کدام یک نود جی اس است؟",
          answerOptions: [
            { answerText: "پی اچ پی", isCorrect: false },
            { answerText: "نود جی اس", isCorrect: true },
            { answerText: "اچ تی ام ال", isCorrect: false },
            { answerText: "سی اس اس", isCorrect: false },
          ],
        },
        {
          questionText: "کدام یک میوه است؟",
          answerOptions: [
            { answerText: "سیب", isCorrect: true },
            { answerText: "میز", isCorrect: false },
            { answerText: "پنجره", isCorrect: false },
            { answerText: "درخت", isCorrect: false },
          ],
        },
        {
          questionText: "بلند ترین حیوان کدام است؟",
          answerOptions: [
            { answerText: "میمون", isCorrect: false },
            { answerText: "گربه", isCorrect: false },
            { answerText: "سگ", isCorrect: false },
            { answerText: "زرافه", isCorrect: true },
          ],
        },
        {
          questionText: "بیشترین عدد کدام است؟",
          answerOptions: [
            { answerText: "645", isCorrect: false },
            { answerText: "22", isCorrect: false },
            { answerText: "333", isCorrect: false },
            { answerText: "999", isCorrect: true },
          ],
        },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
    };
  }

  clickHandler(isCorrect) {
    if (isCorrect) {
      this.setState((prevState) => {
        return {
          score: prevState.score + 1,
        };
      });
    }

    if (this.state.currentQuestion === 4) {
      this.setState({ showScore: true });
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  }

  render() {
    return (
      <div className="app">
        {/* next div is for showing user score */}
        {this.state.showScore ? (
          <div className="score-section">
            امتیاز شما {this.state.score} از {this.state.questions.length}
          </div>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>سوال {this.state.currentQuestion + 1}</span>/{" "}
                {this.state.questions.length}
              </div>
              <div className="question-text">
                {this.state.questions[this.state.currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {this.state.questions[
                this.state.currentQuestion
              ].answerOptions.map((answer) => (
                <button
                  onClick={this.clickHandler.bind(this, answer.isCorrect)}
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
