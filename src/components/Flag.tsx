import useAnimation from "../hooks/UseAnimation";

type Props = { flag: string };

const Flag = ({ flag }: Props) => {
  const animatedFlag = useAnimation(flag);

  return (
    <ul>
      {animatedFlag.map((char, idx) => (
        <li key={idx}>{char}</li>
      ))}
    </ul>
  );
};

export default Flag;
