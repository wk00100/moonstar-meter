export interface ISeries {
  type: string
  name: string
  products?: IProduct[]
}

export interface IProduct {
  id: string
  name: string
  img: string
}
