import * as React from 'react';
import { ViewStyle } from 'react-native';
import Node from '../node';

export interface CountdownProps {
  timeStamp?: number | string;
  style?: ViewStyle;
  onEnd?: Function;
}

const Countdown: React.FC<CountdownProps> = props => {
  const { timeStamp, style, onEnd } = props;

  const intervalId = React.useRef<any>(null);

  const [count, setCount] = React.useState('');

  React.useEffect(() => {
    let countDownStr = '';
    if (!intervalId.current) {
      let second = (new Date(Number(timeStamp || 0)).getTime() - new Date().getTime()) / 1000;
      if (second > 0) {
        intervalId.current = setInterval(() => {
          if (second - 1 < 0) {
            clearInterval(intervalId.current);
            intervalId.current = 'done';
            return;
          }
          second -= 1;
          const hour = Math.floor(second / 3600);
          const min = Math.floor(second / 60) % 60;
          let sec: number | string = second % 60;
          sec = sec.toFixed(0);
          countDownStr = `${hour}:${min}:${sec}`;
          setCount(countDownStr);
        }, 1000);
      } else {
        // 如果没有时间,调用倒计时结束的方法
        setTimeout(() => {
          onEnd?.();
        }, 1000);
      }
    }

    return () => {
      clearInterval(intervalId.current);
      intervalId.current = null;
    };
  }, [timeStamp]);

  return <Node style={style}>{count}</Node>;
};

export default Countdown;
