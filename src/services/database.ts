import { createClient } from '@libsql/client'

const client = createClient({
  url: import.meta.env.VITE_TURSO_CONNECTION_URL,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
})

export interface Player {
  id?: number
  name: string
  games: number
  points: number
  statusTrend: string
}

// Get all players
export async function getAllPlayers(): Promise<Player[]> {
  try {
    const result = await client.execute('SELECT * FROM players ORDER BY id DESC')
    return result.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      games: row.games,
      points: row.points,
      statusTrend: row.statusTrend,
    })) as Player[]
  } catch (error) {
    console.error('Error fetching players:', error)
    return []
  }
}

// Add a new player
export async function addPlayer(player: Omit<Player, 'id'>): Promise<Player | null> {
  try {
    const result = await client.execute({
      sql: 'INSERT INTO players (name, games, points, statusTrend) VALUES (?, ?, ?, ?) RETURNING *',
      args: [player.name, player.games, player.points, player.statusTrend],
    })
    const row = result.rows[0] as any
    return {
      id: row.id,
      name: row.name,
      games: row.games,
      points: row.points,
      statusTrend: row.statusTrend,
    }
  } catch (error) {
    console.error('Error adding player:', error)
    return null
  }
}

// Update a player
export async function updatePlayer(id: number, player: Omit<Player, 'id'>): Promise<Player | null> {
  try {
    const result = await client.execute({
      sql: 'UPDATE players SET name = ?, games = ?, points = ?, statusTrend = ? WHERE id = ? RETURNING *',
      args: [player.name, player.games, player.points, player.statusTrend, id],
    })
    const row = result.rows[0] as any
    return {
      id: row.id,
      name: row.name,
      games: row.games,
      points: row.points,
      statusTrend: row.statusTrend,
    }
  } catch (error) {
    console.error('Error updating player:', error)
    return null
  }
}

// Delete a player
export async function deletePlayer(id: number): Promise<boolean> {
  try {
    await client.execute({
      sql: 'DELETE FROM players WHERE id = ?',
      args: [id],
    })
    return true
  } catch (error) {
    console.error('Error deleting player:', error)
    return false
  }
}

// Initialize database schema
export async function initializeDatabase(): Promise<void> {
  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        games INTEGER NOT NULL DEFAULT 0,
        points INTEGER NOT NULL DEFAULT 0,
        statusTrend TEXT NOT NULL DEFAULT 'stable',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
  }
}

export default client
