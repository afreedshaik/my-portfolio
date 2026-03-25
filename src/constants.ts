import { 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Workflow,
  Code2,
  GitBranch,
  Monitor
} from 'lucide-react';

export const PROFILE = {
  name: "Afreed Hussain Shaik",
  title: "Software Engineer (SDE II)",
  location: "Bay Area, California",
  email: "afreedhussain2000@gmail.com",
  phone: "+1 (312) 468-4251",
  linkedin: "https://www.linkedin.com/in/afreedshaik183/",
  github: "https://github.com/afreedshaik",
  image: "/profile.jpg",
  tagline: "Building high-availability distributed systems and scalable data platforms at Amazon.",
  summary: "Software Engineer with 5 years of experience building secure, fault-tolerant distributed systems and microservices at scale. Specialized in high-availability production services, designing secure APIs, and owning systems end-to-end through CI/CD, observability, and on-call operations."
};

export const EXPERIENCE = [
  {
    company: "Amazon",
    role: "Software Development Engineer II",
    period: "Jan 2025 - Present",
    location: "Santa Clara, CA",
    impact: [
      "Designed and developed scalable backend microservices using Python and Java, reducing API latency by 35% through improved caching, concurrency, and request routing.",
      "Built event-driven pipelines using Kafka, AWS SQS, and SNS processing millions of events per day, with idempotency, retries, and dead-letter queues.",
      "Engineered fault-tolerant distributed systems using circuit breakers, timeouts, and exponential backoff, achieving 99.99% service availability.",
      "Implemented secure credential handling and access controls using AWS IAM and environment isolation to prevent accidental exposure of sensitive data.",
      "Improved monitoring, alerting, and observability using CloudWatch and Prometheus, reducing MTTR during production incidents."
    ],
    tech: ["Python", "Java", "Kafka", "AWS (Lambda, S3, DynamoDB)", "Kubernetes", "Docker", "Prometheus"]
  },
  {
    company: "EPAM Systems",
    role: "Software Engineer",
    period: "Jun 2019 - Dec 2022",
    location: "Hyderabad, India",
    impact: [
      "Developed backend services and REST APIs in Java, Go, and Python, improving scalability and performance across customer-facing applications.",
      "Optimized PostgreSQL and MongoDB workloads through indexing, schema design, and query tuning, reducing latency by 40%.",
      "Implemented real-time event processing with Kafka, reducing pipeline delays from minutes to seconds.",
      "Automated CI/CD pipelines using Jenkins and GitHub Actions to ensure consistent, secure deployments."
    ],
    tech: ["Java", "Go", "Python", "PostgreSQL", "MongoDB", "Kafka", "Jenkins", "GitHub Actions"]
  }
];

export const PROJECTS = [
  {
    title: "Secure AI-Powered Distributed Data Processing",
    problem: "Processing large-scale unstructured data while maintaining strict security and low-latency retrieval for LLM-powered workflows.",
    architecture: "Event-driven serverless architecture using AWS Lambda and Step Functions for orchestration, with Pinecone for vector storage.",
    achievements: [
      "Implemented RAG-based semantic retrieval using LangChain and Pinecone with controlled access to sensitive data.",
      "Built resilient microservices with Python and FastAPI, using Kafka for reliable and secure pipelines.",
      "Applied safeguards to prevent data leakage in LLM-powered workflows through access-scoped retrieval."
    ],
    tech: ["AWS Lambda", "Step Functions", "LangChain", "Pinecone", "FastAPI", "Kafka"]
  },
  {
    title: "Distributed Event Processing System",
    problem: "Handling high-throughput event streams with exactly-once processing semantics and fault tolerance.",
    architecture: "Kafka-centric architecture with horizontal scaling consumers and stateful processing using Redis for deduplication.",
    achievements: [
      "Processed 10M+ events daily with <50ms end-to-end latency.",
      "Implemented dead-letter queue (DLQ) patterns for automated error recovery.",
      "Achieved 100% data consistency across distributed nodes."
    ],
    tech: ["Kafka", "Redis", "Java", "Spring Boot", "Docker"]
  },
  {
    title: "Scalable Microservices Platform",
    problem: "Modernizing a monolithic application to a cloud-native microservices architecture to improve deployment velocity.",
    architecture: "Containerized services deployed on EKS (Kubernetes) with an API Gateway for centralized routing and security.",
    achievements: [
      "Reduced deployment time from hours to minutes using blue-green deployment strategies.",
      "Implemented service mesh for fine-grained observability and traffic control.",
      "Scaled to support 5x traffic growth without performance degradation."
    ],
    tech: ["Kubernetes", "AWS EKS", "Terraform", "Go", "gRPC", "Istio"]
  }
];

export const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "Java", "Go", "SQL", "C++", "TypeScript"]
  },
  {
    category: "Backend & Systems",
    icon: Server,
    items: ["Microservices", "REST APIs", "Event-Driven Architecture", "Caching", "Fault Tolerance", "System Design"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (EC2, S3, Lambda, DynamoDB)", "Docker", "Kubernetes", "Terraform", "CI/CD", "IAM"]
  },
  {
    category: "Data & Messaging",
    icon: Database,
    items: ["Kafka", "PostgreSQL", "MySQL", "Redis", "MongoDB", "Snowflake", "Spark"]
  },
  {
    category: "Observability",
    icon: Activity,
    items: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack"]
  }
];

export const SYSTEM_DESIGN = {
  title: "Designing a Scalable Real-Time Routing System",
  description: "A deep dive into building a system that routes millions of requests with sub-millisecond overhead, focusing on consistency and availability.",
  tradeoffs: [
    {
      topic: "Consistency vs. Availability",
      decision: "Prioritized high availability (AP) using eventual consistency for non-critical metadata, ensuring the routing engine never blocks."
    },
    {
      topic: "Caching Strategy",
      decision: "Implemented a multi-tier caching strategy (L1 Local, L2 Redis) to reduce DB load by 80% and improve response times."
    },
    {
      topic: "Service Discovery",
      decision: "Used client-side load balancing with Consul for service discovery to avoid single points of failure in the routing path."
    }
  ]
};
