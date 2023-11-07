/** @format */

import { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuestionAnswer = ({question, answer}) => {
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setDrop((prev) => !prev);
  };

  return (
    <div className='quest-answer'>
      <p className='question'>
        {question}{" "}
        <ExpandMoreIcon onClick={handleClick} className='drop' />
      </p>

      {drop && <p className='answer'>{answer}</p>}
    </div>
  );
};

export default QuestionAnswer;
