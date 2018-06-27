import React, { Component } from 'react';
import { useSample } from '../contexts/sample';

class Sends extends Component {
  state = {
    input: ''
  }

  componentDidMount() {
    // :: 초기 값 설정
    this.setState({
      input: this.props.value,
    })
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSumit = (e) => {
    e.preventDefault();
    // :: props로 받은 setValue 호출
    this.props.setValue(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleSumit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    );
  }
}

// :: Sends 대신에 SendsContainer 를 내보내줌
export default useSample(Sends);