import createAccount from "../assets/createaccount.svg";
import learner from "../assets/learner.svg";
import tutor from "../assets/tutor.svg";
import Card from "../reusable_components/card";

const CardGrid = ({ onCardSelect, selected }) => {
  const cards = [
    { text: "Sign in as Tutor", icon: tutor, role: "instructor" },
    { text: "Sign in as Learner", icon: learner, role: "student" },
    { text: "Create an account", icon: createAccount, role: "signup" },
  ];
  

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          icon={card.icon}
          onClick={() => onCardSelect(card.role)}
          isSelected={selected === card.role}
        />
      ))}
    </div>
  );
};

export default CardGrid;
