import React from "react";
import { assistData } from "./assistData";

class assist extends React.Component {
    
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadAssistData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: assistData[this.state.currentQuestion].question,
        answer: assistData[this.state.currentQuestion].answer,
        options: assistData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadAssistData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: assistData[this.state.currentQuestion].question,
          options: assistData[this.state.currentQuestion].options,
          answer: assistData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === assistData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
          
        <div className="result">
          <h3 className="gameover">Game Over your Final score is {this.state.score} points </h3>
          <div>
          <div className="correct">The correct answer's for the questions was</div>
            <ul>
              {assistData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
        <div className="QIUZ">QUIZ BEGINNER JavaScript</div>

        <h1 className="quest">{this.state.questions} </h1>
          <span className="spaaaan">{`Questions ${currentQuestion}  out of ${assistData.length -
            1} remaining `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < assistData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              submit
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === assistData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default assist;
