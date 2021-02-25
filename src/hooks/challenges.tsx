import {
  createContext,
  useCallback,
  useState,
  useMemo,
  ReactNode,
} from 'react';

import challenges from '../../challenges.json';

type ChallengeType = {
  BODY: 'body';
  EYE: 'eye';
};

interface Challenge {
  type: ChallengeType;
  description: string;
  amount: number;
}
interface ChallengesContextProps {
  level: number;
  handleLevelUp: () => void;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  handleNewChallenge: () => void;
  handleResetChallenge: () => void;
  handleCompletedChallenge: () => void;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [challengesCompleted, setChanllengesCompleted] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [
    level,
  ]);

  const handleLevelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level, setLevel]);

  const handleNewChallenge = useCallback(() => {
    const randomChallengerIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengerIndex];

    setActiveChallenge(challenge);
  }, []);

  const handleResetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const handleCompletedChallenge = useCallback(() => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    // let tempLevel = level;
    // let tempCurrentExperience = currentExperience;
    // let tempExperienceToNextLevel = experienceToNextLevel;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChanllengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    handleLevelUp,
  ]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        handleLevelUp,
        challengesCompleted,
        currentExperience,
        activeChallenge,
        handleNewChallenge,
        handleResetChallenge,
        handleCompletedChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};