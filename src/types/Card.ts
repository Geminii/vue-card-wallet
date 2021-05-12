type category = 'visa' | 'mastercard'

export interface CardType {
  id: number
  category: category
  num: number
  owner: string
  expiration: string
}
