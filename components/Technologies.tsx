'use client'
import { motion } from 'framer-motion'
import { Cloud, Database, Globe } from 'lucide-react'
import { DiJava } from 'react-icons/di'
import {
  SiAmazon, SiApachedruid, SiApachekafka, SiCss3, SiDjango,
  SiDocker,
  SiDuckdb,
  SiFastapi,
  SiFlask,
  SiGin,
  SiGit,
  SiGithubactions,
  SiGitlab, SiGo, SiGooglecloud, SiGrafana, SiGraphql,
  SiHtml5,
  SiJavascript,
  SiKnime,
  SiKubernetes,
  SiLaravel,
  SiMinio,
  SiMongodb,
  SiMysql, SiNatsdotio, SiNumpy,
  SiPandas,
  SiPolars,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiRedis, SiSocketdotio, SiSpring,
  SiTableau,
  SiTerraform,
  SiTypescript
} from 'react-icons/si'
import GrpcIcon from './icons/GrpcIcon'

export default function Technologies() {
  const techStack = {
    'Languages': [
      { icon: SiGo, name: 'Go', level: 4 },
      { icon: SiPython, name: 'Python', level: 3 },
      { icon: SiTypescript, name: 'TypeScript', level: 1 },
      { icon: SiJavascript, name: 'JavaScript', level: 1 },
      { icon: SiHtml5, name: 'HTML', level: 1 },
      { icon: SiCss3, name: 'CSS', level: 1 }
    ],
    'Backend Frameworks': [
      { icon: SiGin, name: 'Gin', level: 3 },
      { icon: SiDjango, name: 'Django', level: 2 },
      { icon: SiFastapi, name: 'FastAPI', level: 2 },
      { icon: SiFlask, name: 'Flask', level: 1 },
      { icon: SiSpring, name: 'Spring Boot', level: 1 },
      { icon: SiLaravel, name: 'Laravel', level: 2 }
    ],
    'API Protocols': [
      { icon: GrpcIcon, name: 'gRPC', level: 3 },
      { icon: Globe, name: 'REST', level: 4 },
      { icon: SiGraphql, name: 'GraphQL', level: 2 },
      { icon: SiSocketdotio, name: 'WebSocket', level: 2 }
    ],
    'Databases': [
      { icon: SiPostgresql, name: 'PostgreSQL', level: 3 },
      { icon: SiMysql, name: 'MySQL', level: 3 },
      { icon: Database, name: 'SQL Server', level: 2 },
      { icon: SiMongodb, name: 'MongoDB', level: 1 },
      { icon: SiApachedruid, name: 'Apache Druid', level: 2 },
      { icon: SiRedis, name: 'Redis', level: 2 }
    ],
    'Messaging & Streaming': [
      { icon: SiApachekafka, name: 'Kafka', level: 2 },
      { icon: SiRabbitmq, name: 'RabbitMQ', level: 3 },
      { icon: SiNatsdotio, name: 'NATS', level: 1 }
    ],
    'Cloud & Infrastructure': [
      { icon: SiAmazon, name: 'AWS', level: 2 },
      { icon: SiGooglecloud, name: 'GCP', level: 2 },
      { icon: Cloud, name: 'Azure', level: 2 },
      { icon: Cloud, name: 'OVH', level: 2 },
      { icon: SiMinio, name: 'MinIO', level: 2 },
      { icon: SiDocker, name: 'Docker', level: 3 },
      { icon: SiKubernetes, name: 'Kubernetes', level: 3 },
      { icon: SiTerraform, name: 'Terraform', level: 2 }
    ],
    'DevOps & CI/CD': [
      { icon: SiGithubactions, name: 'GitHub Actions', level: 3 },
      { icon: SiGitlab, name: 'GitLab CI', level: 2 },
      { icon: SiGit, name: 'Git', level: 3 }
    ],
    'Data & Analytics': [
      { icon: SiPandas, name: 'Pandas', level: 3 },
      { icon: SiNumpy, name: 'NumPy', level: 3 },
      { icon: SiPolars, name: 'Polars', level: 2 },
      { icon: SiDuckdb, name: 'DuckDB', level: 2 },
      { icon: Database, name: 'SQL', level: 3 },
      { icon: SiKnime, name: 'KNIME', level: 2 },
      { icon: SiTableau, name: 'Tableau', level: 2 }
    ],
    'Monitoring': [
      { icon: SiPrometheus, name: 'Prometheus', level: 3 },
      { icon: SiGrafana, name: 'Grafana', level: 3 }
    ],
    'Previously Used': [
      { icon: DiJava, name: 'Java', level: 2 }
    ]
  }

  return (
    <div className="space-y-16">
      {Object.entries(techStack).map(([category, techs], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Minimalist Category Header */}
          <div className="mb-8">
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider text-muted mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {category}
            </motion.h3>
            <motion.div
              className="h-px bg-gradient-to-r from-border via-border/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            />
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + i * 0.05,
                  duration: 0.3
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Content */}
                  <div className="flex flex-col items-center justify-center gap-3 h-full min-h-[100px]">
                    {/* Icon with subtle hover effect */}
                    <div className="relative">
                      <tech.icon className={tech.name === 'gRPC' ? 'w-24 h-24 text-foreground/70 group-hover:text-foreground transition-colors duration-300' : 'w-12 h-12 text-foreground/70 group-hover:text-foreground transition-colors duration-300'} />
                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current" />
                    </div>

                    {/* Tech name - always visible, hidden for gRPC */}
                    {tech.name !== 'gRPC' && (
                      <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                        {tech.name}
                      </span>
                    )}

                    {/* Mastery Level Dots */}
                    <div className="flex gap-1.5 mt-2">
                      {[1, 2, 3, 4].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${dot <= tech.level
                            ? 'bg-blue-500 group-hover:bg-blue-400 shadow-sm'
                            : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Subtle top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
