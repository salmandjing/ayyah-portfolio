export interface Address {
  street: string
  city: string
  state: string
  zip: string
}

export interface SocialLink {
  name: string
  url: string
  className: string
}

export interface MainData {
  name: string
  occupation: string
  description: string
  image: string
  bio: string
  email: string
  phone: string
  address: Address
  website: string
  resumedownload: string
  social: SocialLink[]
}

export interface Education {
  school: string
  degree: string
  graduated: string
  description: string
}

export interface Work {
  company: string
  title: string
  years: string
  description: string
}

export interface Project {
  title: string
  description: string
  category: string
  tags: string
  image: string
}

export interface ResumeData {
  main: MainData
  resume: {
    education: Education[]
    work: Work[]
    skills: unknown[]
  }
  portfolio: {
    projects: Project[]
  }
}
