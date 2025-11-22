interface Job {
    title: string
    company: string
    location: string
    period: string
    description: string
    skills: string
}

interface ResumeExperienceProps {
    title: string
    skillsLabel: string
    jobs: Job[]
}

export default function ResumeExperience({ title, skillsLabel, jobs }: ResumeExperienceProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            {jobs.map((job, index) => (
                <div key={index} className="job">
                    <div className="job-header">
                        <h3>{job.title}</h3>
                        <span className="period">{job.period}</span>
                    </div>
                    <div className="company">{job.company} • {job.location}</div>
                    <p className="description">{job.description}</p>
                    <div className="skills"><strong>{skillsLabel}:</strong> {job.skills}</div>
                </div>
            ))}
        </div>
    )
}
