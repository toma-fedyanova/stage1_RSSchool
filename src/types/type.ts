export interface CarWeiv {
  name: string,
  color: string,
  id: number
}

export interface Engine {
  velocity: number,
  distance: number
}
export interface MessageEngine {
  success: boolean
}
export interface Winners {
    id?: number,
    wins: number,
    time: number
}