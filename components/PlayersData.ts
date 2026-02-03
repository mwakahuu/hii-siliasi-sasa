// Updated data structure for player statistics and recent match details
export function createPlayerStat(
  name: string,
  games: number,
  points: number,
  statusTrend: 'up' | 'down',
) {
  return {
    name,
    games,
    points,
    statusTrend,
    recentMatches: [
      { date: '2024-05-10', gameName: 'Rocket League', pointsScored: 250, prizeWinned: '$500' },
      { date: '2024-05-08', gameName: 'Fortnite Tournament', pointsScored: 120, prizeWinned: 'N/A' },
      { date: '2024-05-05', gameName: 'CS:GO Major', pointsScored: 400, prizeWinned: '$1,500' },
    ],
  }
}

export type PlayerStat = ReturnType<typeof createPlayerStat>;

export const playersData = [
  createPlayerStat('Alex Johnson', 45, 1200, 'up'),
  createPlayerStat('Sarah Lee', 32, 980, 'down'),
  createPlayerStat('Ben Carter', 51, 1550, 'up'),
  createPlayerStat('Maria Garcia', 28, 700, 'down'),
  createPlayerStat('Tom Wilson', 60, 1820, 'up'),
  createPlayerStat('Emma Martinez', 38, 1100, 'up'),
  createPlayerStat('James Anderson', 42, 1350, 'down'),
  createPlayerStat('Olivia Brown', 35, 950, 'up'),
  createPlayerStat('Michael Chen', 48, 1600, 'up'),
  createPlayerStat('Sophie Taylor', 29, 850, 'down'),
  createPlayerStat('David Thompson', 55, 1750, 'up'),
  createPlayerStat('Isabella White', 33, 1050, 'up'),
  createPlayerStat('Chris Jackson', 50, 1450, 'down'),
  createPlayerStat('Lauren Harris', 27, 780, 'down'),
  createPlayerStat('Ryan Martin', 44, 1300, 'up'),
]
