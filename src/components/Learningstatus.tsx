import { useState } from "react";

const Learningstatus = () => {
  const [isLearning, setIsLearning] = useState(true);

  return (
    <section id="learning">
      <div>
        <h2>
          {isLearning
            ? "Daniel is currently learning React."
            : "Daniel is taking a break."}
        </h2>
        <p>Always building, always learning!</p>
      </div>
      <button
        onClick={() => setIsLearning(!isLearning)}
        className="learningButton"
      >
        Change Status
      </button>
    </section>
  );
};

export default Learningstatus;
