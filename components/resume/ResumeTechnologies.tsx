interface ResumeTechnologiesProps {
    title: string
    labels: {
        languages: string
        frameworks: string
        databases: string
        tools: string
    }
    technologies: {
        languages: string[]
        frameworks: string[]
        databases: string[]
        tools: string[]
    }
}

export default function ResumeTechnologies({ title, labels, technologies }: ResumeTechnologiesProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            <div className="tech-grid">
                <div className="tech-category">
                    <h4>{labels.languages}</h4>
                    <div className="tech-list">{technologies.languages.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.frameworks}</h4>
                    <div className="tech-list">{technologies.frameworks.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.databases}</h4>
                    <div className="tech-list">{technologies.databases.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.tools}</h4>
                    <div className="tech-list">{technologies.tools.join(' • ')}</div>
                </div>
            </div>
        </div>
    )
}
