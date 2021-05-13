type category = 'visa' | 'mastercard'

export interface CardType {
  id?: number
  category: category
  num: string
  owner: string
  expiration: string
}
