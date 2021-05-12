export type PaymentAction = 'payment' | 'refund' | 'credit'

export interface RecentPayment {
  id: number
  name: string
  action: PaymentAction
  date: string
  amount: string
}
