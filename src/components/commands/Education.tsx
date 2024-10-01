import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my educational background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Secondary(X),BSEB,PATNA",
    desc: "UMS Muda Maksudpur | 2019",
  },
  {
    title: "Senior Secondary(XII),BSEB,PATNA",
    desc: "Ibrahim Memorial H/S Sasamusa,Gopalganj | 2019 ~ 2021",
  },
  {
    title: "B-Tech in Electrical Engneering",
    desc: "National Institute of Technology Agartala | 2021 - present",
  },
];

export default Education;
