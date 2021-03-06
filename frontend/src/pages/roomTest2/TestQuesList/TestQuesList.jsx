import React, { Component } from "react";
import "./TestQuesComponent.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
class TestQuesList extends Component {
  constructor(props) {
    super(props);

    this.makeQues = this.makeQues.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.state = {};
    this.chatScroll = React.createRef();
  }

  makeQues() {
    let temp = document.getElementById("input1").value;
    document.getElementById("input1").value = "";
    console.log(temp);
    this.props.session
      .signal({
        data: JSON.stringify({
          question: temp,
          questionId: String(Date.now()),
        }), // 보내는 내용
        to: [], // 누구한데 보낼건지. 비워있으면 모두에게 보내는거
        type: "makeQues", // 시그널 타입.
      })
      .then(() => {
        console.log("make Question!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleEnter(event) {
    if (event.keyCode === 13 && !this.props.ready) {
      this.makeQues();
    }
  }
  handleDeleteBtn(event) {
    console.log(event);
    this.props.session
      .signal({
        data: event.target.parentElement.id, // 보내는 내용
        to: [], // 누구한데 보낼건지. 비워있으면 모두에게 보내는거
        type: "deleteQues", // 시그널 타입.
      })
      .then(() => {
        console.log("delete Question!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const styleChat = { display: this.props.chatDisplay };
    return (
      <div id="chatContainer">
        <div id="chatComponent" style={styleChat}>
          <span className="font-bold ml-32">사전질문추가</span>
          {/* <div id="navInput"></div> */}
          <div className="message-wrap" ref={this.chatScroll}>
            {this.props.questions.map((question) => (
              <div
                className="grid grid-cols-7"
                id={question.questionId}
                key={question.questionId}
              >
                <div className="col-span-6">{question.content}</div>
                {question.connectionId === this.props.localUser.connectionId ? (
                  <button
                    disabled={this.props.ready ? true : false}
                    onClick={this.handleDeleteBtn}
                    className=""
                  >
                    X
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 mt-4">
            <input
              id="input1"
              onKeyDown={this.handleEnter}
              className="ml-5 col-span-2 border-2 w-full rounded-xl"
              placeholder="채팅 메세지를 작성해주세요"
            ></input>

            <Fab
              onClick={this.makeQues}
              disabled={this.props.ready ? true : false}
              size="small"
              aria-label="add"
              id="sendButton"
            >
              <AddIcon sx={{ color: "white" }} />
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default TestQuesList;
