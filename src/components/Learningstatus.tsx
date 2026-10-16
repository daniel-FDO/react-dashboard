import { useState } from "react";

const Learningstatus = () => {
  const [isLearning, setIsLearning] = useState(true);

  return (
    <section id="learning">
      <p>
        {isLearning
          ? "Daniel is currently learning React."
          : "Daniel is taking a break."}
      </p>
      <button onClick={() => setIsLearning(!isLearning)} className="learningButton">Change Status</button>
    </section>
  );
};

export default Learningstatus; 


