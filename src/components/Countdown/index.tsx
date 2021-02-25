import { useContext } from 'react';
import { CountdownContext } from '../../hooks/countdown';
import * as S from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <S.Container>
      <div>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled>
          Ciclo encerrado <img src="icons/check-button.svg" alt="" />
        </button>
      ) : isActive ? (
        <button className="activeButton" type="button" onClick={resetCountdown}>
          Abandonar o ciclo
        </button>
      ) : (
        <button type="button" onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      )}
    </S.Container>
  );
};

export default Countdown;
