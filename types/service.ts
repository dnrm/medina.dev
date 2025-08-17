export interface ServiceFeature {
  name: string
  included: boolean
}

export interface ServicePlan {
  title: string
  description: string
  price: number
  features: string[]
  icon: React.ReactNode
  backgroundImage: string
  highlighted?: boolean
}
