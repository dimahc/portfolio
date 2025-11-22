interface Education {
    degree: string
    field: string
    school: string
    location: string
    period: string
}

interface ResumeEducationProps {
    title: string
    education: Education[]
}

export default function ResumeEducation({ title, education }: ResumeEducationProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            {education.map((edu, index) => (
                <div key={index} className="education-item">
                    <div className="education-header">
                        <div className="degree">{edu.degree}</div>
                        <span className="period">{edu.period}</span>
                    </div>
                    <div className="field">{edu.field}</div>
                    <div className="school-info">{edu.school} • {edu.location}</div>
                </div>
            ))}
        </div>
    )
}
