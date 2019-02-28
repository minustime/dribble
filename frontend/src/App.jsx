import * as React from 'react';

import styles from './App.scss';

class App extends React.Component {
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  componentWillMount() {
    this.blocks = [
      {
        day: 'Tue',
        hour: 18,
        duration: 90,
        signups: 1,
      },
      {
        day: 'Tue',
        hour: 19,
        duration: 60,
        signups: 2,
      },
      {
        day: 'Thu',
        hour: 18,
        duration: 30,
        signups: 8,
      },
      {
        day: 'Thu',
        hour: 19,
        duration: 60,
        signups: 8,
      },
    ];
  }

  // Find the specific block for the day and hour supplied
  getBlock(b, d, h) {
    return b.find(i => i.day === d && i.hour === h);
  }

  // Convert military time to standard time
  getStandardTime(t) {
    return (t > 12 ? t - 12 : t) + (t > 11 && t < 24 ? 'pm' : 'am');
  }

  // Trim the hours array to only show rows where there's a block available to sign up
  trimHours(h, b) {
    const ranges = [...new Set(b.map(i => i.hour))].sort((a, b) => a - b);
    return h.slice(h.indexOf(ranges[0]) - 1, h.indexOf(ranges[ranges.length - 1] + 2));
  }

  render() {
    const Block = props => {
      const style = {
        height: `${props.duration}px`,
      };
      return (
        <div className={styles.block} style={style}>
          {props.signups}
        </div>
      );
    };

    const Time = props => {
      return <td className={styles.time}>{props.details && <Block {...props.details} />}</td>;
    };

    const Times = () => {
      return this.trimHours(this.hours, this.blocks).map((hour, key) => (
        <tr key={key}>
          <th className={styles.hour}>{this.getStandardTime(hour)}</th>
          {this.days.map((day, key) => {
            const block = this.getBlock(this.blocks, day, hour);
            return (block && <Time details={block} key={key} />) || <Time key={key} />;
          })}
        </tr>
      ));
    };

    const Days = () => {
      return this.days.map((i, key) => (
        <th className={styles.day} key={key}>
          {i}
        </th>
      ));
    };

    return (
      <div className={styles.app}>
        <h1>Dribble!</h1>
        <table>
          <thead>
            <tr>
              <td>&nbsp;</td>
              <Days />
            </tr>
          </thead>
          <tbody>
            <Times />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
