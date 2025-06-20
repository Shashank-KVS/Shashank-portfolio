export const personalInfo = {
  name: "Venkata Shashank Kowtharapu",
  title: "Generative AI Scientist & MLOps Engineer",
  email: "kvshashank10081998@gmail.com",
  phone: "+1 (343) 989-4078",
  location: "Mississauga, Ontario, Canada",
  linkedin: "https://www.linkedin.com/in/shashank-kowtharapu",
  github: "https://github.com/Shashank-KVS",
  medium: "https://medium.com/@kvshashank10081998",
  researchgate: "https://www.researchgate.net/profile/Venkata-Shashank-Kowtharapu",
  bio: "Innovative AI and Machine Learning professional with 4+ years of experience specializing in Generative AI, MLOps, and large-scale model deployment. Proven expertise in designing and automating AI workflows, optimizing model performance, and implementing scalable solutions using Azure ML Studio, Hugging Face, and Llama.",
  extendedBio: "Certified Azure Cognitive Services Specialist and AZAI Generative AI Specialist, with deep proficiency in LLM development, cloud-based ML pipelines, and production-ready AI systems.",
  stats: {
    experience: "4+",
    certifications: "5+",
    projects: "10+"
  }
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", icon: "🐍", link: "https://python.org" },
      { name: "SQL", icon: "🗄️", link: "https://www.postgresql.org/docs/" },
      { name: "Bash", icon: "💻", link: "https://www.gnu.org/software/bash/" },
      { name: "R", icon: "📊", link: "https://www.r-project.org/" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "LLM Development", icon: "🤖", link: "https://huggingface.co/docs" },
      { name: "PyTorch", icon: "🔥", link: "https://pytorch.org" },
      { name: "TensorFlow", icon: "🧠", link: "https://tensorflow.org" },
      { name: "Scikit-learn", icon: "🔬", link: "https://scikit-learn.org" },
      { name: "Hugging Face", icon: "🤗", link: "https://huggingface.co" },
      { name: "LangChain", icon: "🔗", link: "https://langchain.com" },
      { name: "NLP & NLU", icon: "📝", link: "https://spacy.io" },
      { name: "Computer Vision", icon: "👁️", link: "https://opencv.org" },
      { name: "Time Series", icon: "📈", link: "https://www.statsmodels.org" }
    ]
  },
  {
    category: "Cloud & MLOps",
    icon: "cloud",
    skills: [
      { name: "Azure ML Studio", icon: "☁️", link: "https://azure.microsoft.com/en-us/services/machine-learning/" },
      { name: "Azure Cognitive Services", icon: "🧠", link: "https://azure.microsoft.com/en-us/services/cognitive-services/" },
      { name: "PySpark", icon: "⚡", link: "https://spark.apache.org/docs/latest/api/python/" },
      { name: "MLflow", icon: "🎯", link: "https://mlflow.org" },
      { name: "Docker", icon: "🐳", link: "https://docs.docker.com" },
      { name: "Jenkins", icon: "🏗️", link: "https://www.jenkins.io" },
      { name: "Git", icon: "📋", link: "https://git-scm.com" },
      { name: "CI/CD", icon: "🔄", link: "https://docs.github.com/en/actions" }
    ]
  },
  {
    category: "Data & Analytics",
    icon: "chart",
    skills: [
      { name: "NumPy", icon: "🔢", link: "https://numpy.org" },
      { name: "Pandas", icon: "🐼", link: "https://pandas.pydata.org" },
      { name: "Tableau", icon: "📊", link: "https://www.tableau.com" },
      { name: "KQL", icon: "📋", link: "https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/" },
      { name: "ETL Processes", icon: "🔄", link: "https://azure.microsoft.com/en-us/services/data-factory/" },
      { name: "Data Visualization", icon: "📈", link: "https://plotly.com" }
    ]
  },
  {
    category: "Development Tools",
    icon: "tools",
    skills: [
      { name: "API Development", icon: "🌐", link: "https://fastapi.tiangolo.com" },
      { name: "REST APIs", icon: "🔌", link: "https://restfulapi.net" },
      { name: "Jupyter", icon: "📓", link: "https://jupyter.org" },
      { name: "VS Code", icon: "💻", link: "https://code.visualstudio.com" }
    ]
  }
];

export const certifications = [
  {
    name: "Azure AI Fundamentals",
    provider: "Microsoft Azure",
    icon: "microsoft",
    link: "https://learn.microsoft.com/en-us/credentials/"
  },
  {
    name: "Azure Administrator",
    provider: "Microsoft Azure",
    icon: "microsoft",
    link: "https://learn.microsoft.com/en-us/credentials/"
  },
  {
    name: "Generative AI Specialist",
    provider: "Azure AI",
    icon: "brain",
    link: "https://learn.microsoft.com/en-us/credentials/"
  },
  {
    name: "Python Professional",
    provider: "Advanced Python",
    icon: "python",
    link: "https://www.python.org/success-stories/category/software-development/"
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Financial Risk Monitor",
    description: "Real-time stock risk monitoring with anomaly detection using hybrid LOF-Random Forest models and DistilBERT embeddings.",
    date: "Mar 2025",
    category: ["ai"],
    tags: ["Python", "ML", "DistilBERT"],
    github: "https://github.com/Shashank-KVS/ai-financial-risk-monitor",
    medium: "https://medium.com/@kvshashank10081998/ai-financial-risk-monitoring",
    icon: "chart-line",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    id: 2,
    title: "DeepSeek Azure ML Serverless",
    description: "Scalable AI filtering system using Azure Machine Learning with serverless workflows for efficient large dataset processing.",
    date: "Feb 2025",
    category: ["cloud", "ai"],
    tags: ["Azure ML", "Serverless", "AI"],
    github: "https://github.com/Shashank-KVS/deepseek-azure-ml-serverless",
    medium: "https://medium.com/@kvshashank10081998/deepseek-azure-serverless",
    icon: "cloud",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 3,
    title: "Phi-4 Fine-Tuning NLP",
    description: "Domain-specific text generation using fine-tuned Phi-4 model with LoRA optimization for computational efficiency.",
    date: "Jan 2025",
    category: ["ai"],
    tags: ["NLP", "LoRA", "Fine-tuning"],
    github: "https://github.com/Shashank-KVS/phi-4-fine-tuning-nlp",
    medium: "https://medium.com/@kvshashank10081998/phi-4-fine-tuning",
    icon: "brain",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Smart Farming AI & IoT",
    description: "Published research on AI-powered IoT frameworks with Edge Computing for smart agriculture and automated farming.",
    date: "Dec 2022",
    category: ["research", "ai"],
    tags: ["IoT", "Edge AI", "Research"],
    github: "https://github.com/Shashank-KVS/smart-farming-iot-ai",
    ieee: "https://ieeexplore.ieee.org/document/9985023/references#references",
    icon: "seedling",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    id: 5,
    title: "Credit Risk Assessment",
    description: "Machine learning models for credit risk evaluation in Home Credit Group dataset with advanced feature engineering.",
    date: "Aug 2021",
    category: ["research", "ai"],
    tags: ["FinTech", "ML", "Risk Analysis"],
    github: "https://github.com/Shashank-KVS/credit-risk-assessment",
    medium: "https://medium.com/@kvshashank10081998/credit-risk-assessment",
    irjet: "https://www.irjet.net/archives/V8/i8/IRJET-V8I8423.pdf",
    icon: "calculator",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    id: 6,
    title: "AI Traffic Signal Optimization",
    description: "Government project implementing AI-powered traffic signal optimization reducing congestion by 15% at major intersections.",
    date: "2018-2019",
    category: ["ai"],
    tags: ["Government", "AI", "IoT"],
    github: "https://github.com/Shashank-KVS/traffic-signal-ai-optimization",
    medium: "https://medium.com/@kvshashank10081998/traffic-signal-optimization",
    icon: "traffic-light",
    gradient: "from-yellow-400 to-orange-400"
  }
];

export const blogPosts = [
  {
    title: "The Future of Generative AI in Enterprise",
    description: "Exploring how LLMs and generative AI are transforming business operations and decision-making processes...",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    link: "https://medium.com/@kvshashank10081998/generative-ai-enterprise-future",
    icon: "robot",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "MLOps Best Practices with Azure ML",
    description: "A comprehensive guide to implementing production-ready ML pipelines using Azure Machine Learning Studio...",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    link: "https://medium.com/@kvshashank10081998/mlops-azure-best-practices",
    icon: "cogs",
    gradient: "from-green-400 to-blue-400"
  },
  {
    title: "Fine-tuning LLMs for Domain-Specific Tasks",
    description: "Deep dive into techniques for adapting large language models for specialized applications using LoRA and PEFT...",
    date: "Nov 30, 2024",
    readTime: "12 min read",
    link: "https://medium.com/@kvshashank10081998/llm-fine-tuning-domain-specific",
    icon: "brain",
    gradient: "from-purple-500 to-pink-500"
  }
];
