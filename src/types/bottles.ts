export interface IBottle {
  icon: string,
  price: number,
  title: string,
  subtitle: string
}
export type IBottles = IBottle[]

export interface IBottlesProps {
  bottles: IBottles;
}
