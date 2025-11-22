'use client'

import PrintButton from '@/components/resume/PrintButton'
import ResumeAbout from '@/components/resume/ResumeAbout'
import ResumeEducation from '@/components/resume/ResumeEducation'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeProjects from '@/components/resume/ResumeProjects'
import ResumeStyles from '@/components/resume/ResumeStyles'
import ResumeTechnologies from '@/components/resume/ResumeTechnologies'
import { experienceContent } from '@/content/experience'
import { projectsContent } from '@/content/projects'
import { LanguageProvider, NavigationProvider, useLanguage } from '@/context'
import { PERSONAL_INFO } from '@/lib/constants'
import { t as translate, tArray as translateArray } from '@/lib/i18n'
import { useEffect, useState } from 'react'

function ResumeContent() {
    const { language } = useLanguage()
    const [mounted, setMounted] = useState(false)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted) {
            // Wait for content to render before triggering print
            const timer = setTimeout(() => {
                setIsReady(true)
                window.print()
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [mounted])

    if (!mounted) {
        return null
    }

    const t = (key: string, params?: Record<string, string | number>) => translate(language, key, params)
    const tArray = (key: string) => translateArray(language, key)

    const portfolioData = {
        name: PERSONAL_INFO.name.full,
        title: t('hero.title'),
        contact: {
            email: PERSONAL_INFO.email.professional,
            location: PERSONAL_INFO.location.display,
            github: 'github.com/dimahc',
            linkedin: 'linkedin.com/in/abdoul-hamid-coulibaly'
        },
        about: tArray('about.paragraphs').join(' '),
        experience: experienceContent[language].jobs,
        projects: projectsContent[language].projects.slice(0, 4),
        technologies: getTechnologies(),
        education: getEducationData(language)
    }

    const labels = {
        about: t('export.sections.about'),
        experience: t('export.sections.experience'),
        projects: t('export.sections.projects'),
        technologies: t('export.sections.technologies'),
        education: t('export.sections.education'),
        languages: t('export.sections.languages'),
        frameworks: t('export.sections.frameworks'),
        databases: t('export.sections.databases'),
        tools: t('export.sections.tools'),
        skills: t('experience.skillsLabel')
    }

    return (
        <div className="resume-container">
            <ResumeStyles />
            <PrintButton />
            <ResumeHeader
                name={portfolioData.name}
                title={portfolioData.title}
                contact={portfolioData.contact}
            />
            <ResumeAbout
                title={labels.about}
                content={portfolioData.about}
            />
            <ResumeTechnologies
                title={labels.technologies}
                labels={{
                    languages: labels.languages,
                    frameworks: labels.frameworks,
                    databases: labels.databases,
                    tools: labels.tools
                }}
                technologies={portfolioData.technologies}
            />
            <ResumeExperience
                title={labels.experience}
                skillsLabel={labels.skills}
                jobs={portfolioData.experience}
            />
            <ResumeProjects
                title={labels.projects}
                skillsLabel={labels.skills}
                projects={portfolioData.projects}
            />
            <ResumeEducation
                title={labels.education}
                education={portfolioData.education}
            />
        </div>
    )
}

function getTechnologies() {
    return {
        languages: ['Go', 'Python', 'Rust', 'Java', 'JavaScript', 'TypeScript', 'PHP'],
        frameworks: ['Spring Boot', 'Django', 'Gin', 'Laravel', 'Ruby on Rails', 'React', 'Next.js'],
        databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Opensearch'],
        tools: ['Docker', 'Kubernetes', 'Git', 'RabbitMQ', 'Kafka', 'AWS', 'Azure', 'Prometheus', 'OpenTelemetry', 'GitOps']
    }
}

function getEducationData(language: 'en' | 'fr') {
    if (language === 'en') {
        return [
            {
                degree: 'Master\'s Degree in Computer Science',
                field: 'Data and Artificial Intelligence',
                school: 'University of Rennes 1',
                location: 'Rennes, France',
                period: '2021 - 2023'
            },
            {
                degree: 'Bachelor\'s Degree in Computer Science',
                field: 'Software Engineering',
                school: 'Alassane Ouattara University',
                location: 'Bouaké, Côte d\'Ivoire',
                period: '2017 - 2020'
            }
        ]
    } else {
        return [
            {
                degree: 'Master en Informatique',
                field: 'Données et Intelligence Artificielle',
                school: 'Université de Rennes 1',
                location: 'Rennes, France',
                period: '2021 - 2023'
            },
            {
                degree: 'Licence en Informatique',
                field: 'Génie Logiciel',
                school: 'Université Alassane Ouattara',
                location: 'Bouaké, Côte d\'Ivoire',
                period: '2017 - 2020'
            }
        ]
    }
}

export default function ResumePage() {
    return (
        <LanguageProvider>
            <NavigationProvider>
                <ResumeContent />
            </NavigationProvider>
        </LanguageProvider>
    )
}
