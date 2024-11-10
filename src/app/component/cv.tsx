'use client'

import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Component() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
  })
  const [education, setEducation] = useState([{ school: '', degree: '', year: '' }])
  const [experience, setExperience] = useState([{ company: '', position: '', year: '', description: '' }])
  const [skills, setSkills] = useState([''])

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
  }

  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newEducation = education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [e.target.name]: e.target.value }
      }
      return edu
    })
    setEducation(newEducation)
  }

  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newExperience = experience.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value }
      }
      return exp
    })
    setExperience(newExperience)
  }

  const handleSkillChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newSkills = skills.map((skill, i) => (i === index ? e.target.value : skill))
    setSkills(newSkills)
  }

  const addEducation = () => setEducation([...education, { school: '', degree: '', year: '' }])
  const addExperience = () => setExperience([...experience, { company: '', position: '', year: '', description: '' }])
  const addSkill = () => setSkills([...skills, ''])

  const removeEducation = (index: number) => setEducation(education.filter((_, i) => i !== index))
  const removeExperience = (index: number) => setExperience(experience.filter((_, i) => i !== index))
  const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index))

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-orange-200 to-cyan-100">
      <h1 className="text-3xl font-bold mb-6 ">Make Your Resume</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
                </div>
                <div>
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea id="summary" name="summary" placeholder='describe in breif' value={personalInfo.summary} onChange={handlePersonalInfoChange} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="space-y-4 mb-4">
                  <div>
                    <Label htmlFor={`school-${index}`}>School</Label>
                    <Input
                      id={`school-${index}`}
                      name="school"
                      value={edu.school}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`degree-${index}`}>Degree</Label>
                    <Input
                      id={`degree-${index}`}
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`year-${index}`}>Year</Label>
                    <Input
                      id={`year-${index}`}
                      name="year"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, e)}
                    />
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => removeEducation(index)}>
                    <Trash2 className="w-4 h-4 mr-2" /> Remove
                  </Button>
                </div>
              ))}
              <Button onClick={addEducation}>
                <PlusCircle className="w-4 h-4 mr-2" /> Add Education
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp, index) => (
                <div key={index} className="space-y-4 mb-4">
                  <div>
                    <Label htmlFor={`company-${index}`}>Company</Label>
                    <Input
                      id={`company-${index}`}
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`position-${index}`}>Position</Label>
                    <Input
                      id={`position-${index}`}
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`exp-year-${index}`}>Year</Label>
                    <Input
                      id={`exp-year-${index}`}
                      name="year"
                      value={exp.year}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${index}`}>Description</Label>
                    <Textarea
                      id={`description-${index}`}
                      name="description"
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => removeExperience(index)}>
                    <Trash2 className="w-4 h-4 mr-2" /> Remove
                  </Button>
                </div>
              ))}
              <Button onClick={addExperience}>
                <PlusCircle className="w-4 h-4 mr-2" /> Add Experience
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Input
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e)}
                    placeholder="Enter a skill. and click Add more for more"
                  />
                  <Button variant="destructive" size="sm" onClick={() => removeSkill(index)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button onClick={addSkill}>
                <PlusCircle className="w-4 h-4 mr-2" /> Add Skill
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resume Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
                  <p>{personalInfo.email} | {personalInfo.phone}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                  <p>{personalInfo.summary}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  {education.map((edu, index) => (
                    <div key={index}>
                      <p><strong>{edu.school}</strong></p>
                      <p>{edu.degree}, {edu.year}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Work Experience</h3>
                  {experience.map((exp, index) => (
                    <div key={index} className="mb-2">
                      <p><strong>{exp.company}</strong></p>
                      <p>{exp.position}, {exp.year}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Skills</h3>
                  <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}