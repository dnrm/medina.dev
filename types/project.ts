export interface Project {
  title: string
  slug: string
  date?: string
  address?: string
  content?: string
  image: string
  excerpt?: string
  description?: string
  order?: number
  icon?: React.ReactNode
}

export interface ProjectFields {
  title?: boolean
  slug?: boolean
  date?: boolean
  address?: boolean
  content?: boolean
  image?: boolean
  excerpt?: boolean
  description?: boolean
  order?: boolean
}
