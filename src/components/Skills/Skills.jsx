import React from 'react'
import styled from 'styled-components'
import { skills } from '../Data/Constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background-image: url('https://img.freepik.com/free-vector/gradient-dynamic-purple-lines-background_23-2148995757.jpg?w=900&t=st=1726312493~exp=1726313093~hmac=42c51de277b695a4db8bc29bfec4fb7ae964095ea148998a617db72684646c1b');
  background-size: cover; /* This makes the background cover the entire container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  min-height: 100vh; /* Ensures it takes the full height of the viewport */
`;



const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
     transform: perspective(1000px);
   rotateX(0deg) ;
   rotateY(0deg);
    scale3d(1, 1, 1);
    
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color:white;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color:white;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
 
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 4) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
     transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); /* Base transform */
  transition: transform 0.4s ease; /* Smooth transition for transform */

  &:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(-5deg)  scale3d(1.05, 1.05, 1); 
  }

`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills"  >
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working in my B.E journey.</Desc>
        <SkillsContainer>
          {skills.map((skill, skillIndex) => (
            <Skill key={skillIndex}> 
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}> 
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};



export default Skills