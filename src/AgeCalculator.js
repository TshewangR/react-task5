import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: 'Jan',
      year: 2000,
      age: '0 years 0 months 0 days',
    };
  }

  handleDayChange = (e) => {
    this.setState({ day: e.target.value });
  }

  handleMonthChange = (e) => {
    this.setState({ month: e.target.value });
  }

  handleYearChange = (e) => {
    this.setState({ year: e.target.value });
  }

  calculateAge = () => {
    const { day, month, year } = this.state;
    const dob = new Date(`${month} ${day}, ${year}`);
    const today = new Date();

    const diff = today - dob;
    const years = Math.floor(diff / 31536000000);  // Approximate number of milliseconds in a year
    const months = Math.floor((diff % 31536000000) / 2628000000);  // Approximate number of milliseconds in a month
    const days = Math.floor(((diff % 31536000000) % 2628000000) / 86400000);  // Approximate number of milliseconds in a day

    const age = `${years} years ${months} months ${days} days`;
    this.setState({ age });
  }

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <div className="container">
          <select onChange={this.handleDayChange} value={this.state.day}>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          <select onChange={this.handleMonthChange} value={this.state.month}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select onChange={this.handleYearChange} value={this.state.year}>
            {Array.from({ length: (new Date()).getFullYear() - 1900 + 1 }, (_, i) => i + 1900).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button onClick={this.calculateAge}>Calculate</button>
        <article>
          <h2>Your age is</h2>
          <span>{this.state.age}</span>
        </article>
        <footer>Made with <a href="https://reactjs.org/" target="_blank" >ReactJS</a></footer>
      </div>
    );
  }
}

export default AgeCalculator;
