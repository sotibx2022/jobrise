import NextButton from '@/app/components/buttons/NextButton'
import FormInput from '@/app/components/form/inputs/FormInput'
import React from 'react'
const Skills = () => {
  const [skills, setSkills] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState<string>('')
  console.log(skills)
  return (
    <section>
      <div>
      <div>Skills Lists
        {skills.map((skill, index) => (<div key={index}>{skill}
          <button onClick={() => setSkills(skills.filter((skillItem, skillIndex) => skillIndex !== index))}>Remove</button>
        </div>
        ))}
      </div>
      <FormInput lable={'Skill'} placeholder={'Web Development'} name={'skill'} type={'text'} />
      <button type='button' onClick={() => {
        if (inputValue.trim() !== '') {
          setSkills([...skills, inputValue.trim()]);
          setInputValue('');
        }
      }}>Submit</button>
    </div>
    <div>
      <div>Digital Skills Lists
        {skills.map((skill, index) => (<div key={index}>{skill}
          <button onClick={() => setSkills(skills.filter((skillItem, skillIndex) => skillIndex !== index))}>Remove</button>
        </div>
        ))}
      </div>
      <FormInput lable={'Skill'} placeholder={'Web Development'} name={'skill'} type={'text'} />
      <button type='button' onClick={() => {
        if (inputValue.trim() !== '') {
          setSkills([...skills, inputValue.trim()]);
          setInputValue('');
        }
      }}>Submit</button>
    </div>
    <div>
      <div>Language Skills Lists
        {skills.map((skill, index) => (<div key={index}>{skill}
          <button onClick={() => setSkills(skills.filter((skillItem, skillIndex) => skillIndex !== index))}>Remove</button>
        </div>
        ))}
      </div>
      <FormInput lable={'Skill'} placeholder={'Web Development'} name={'skill'} type={'text'} />
      <button type='button' onClick={() => {
        if (inputValue.trim() !== '') {
          setSkills([...skills, inputValue.trim()]);
          setInputValue('');
        }
      }}>Submit</button>
    </div>
    </section>
  )
}
export default Skills