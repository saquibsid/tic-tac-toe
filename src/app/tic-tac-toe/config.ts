export interface Config {
    size: number;        // board dimension (NxN)
    winLength: number;   // number of continuous cells to win
    players: string[];   // list of players
  }
  
export const DEFAULT_CONFIG: Config = {
    size: 5,
    winLength: 4,
    players: ['X', 'O', 'Δ']
};
  