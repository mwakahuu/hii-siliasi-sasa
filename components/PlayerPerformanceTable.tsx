import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useState, useEffect } from 'react'
import PlayerStatsRow from './PlayerStatsRow'
import { getAllPlayers, getPlayerMatches, type Player, type Match } from '../database'

interface PlayerWithMatches extends Player {
  matches: Match[]
}

export default function PlayerPerformanceTable() {
  const [players, setPlayers] = useState<PlayerWithMatches[]>([])
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const playersData = await getAllPlayers()
        
        const playersWithMatches = await Promise.all(
          playersData.map(async (player) => {
            const matches = await getPlayerMatches(player.id || 0)
            return {
              ...player,
              matches,
            }
          })
        )
        
        // Sort by points descending
        playersWithMatches.sort((a, b) => b.points - a.points)
        setPlayers(playersWithMatches)
      } catch (error) {
        console.error('Error loading players:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <Box sx={{ mt: { xs: 2, sm: 3, md: 6 } }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 'bold',
          fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
        }}
      >
        Ubao wa Wakali
        
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ overflowX: 'auto', width: '100%' }}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              boxShadow: 3, 
              borderRadius: 2,
              overflow: 'hidden',
              minWidth: isMobile ? '100%' : '650px',
            }}
          >
            <Table 
              aria-label="collapsible player stats table" 
              sx={{ 
                minWidth: isMobile ? '100%' : 650,
                tableLayout: isMobile ? 'auto' : 'auto',
              }}
            >
              <TableHead sx={{ backgroundColor: '#f0f4f8' }}>
                <TableRow>
                  <TableCell sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }} />
                  <TableCell sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Rank</TableCell>
                  <TableCell sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Player</TableCell>
                  <TableCell align="right" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Games</TableCell>
                  <TableCell align="right" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Points</TableCell>
                  <TableCell align="center" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((player, index) => {
                  const playersData = {
                    name: player.name,
                    games: player.games,
                    points: player.points,
                    status: player.statusTrend,
                  }
                  return (
                    <PlayerStatsRow 
                      key={player.id} 
                      row={playersData}
                      rank={index + 1} 
                      totalRows={players.length}
                      isMobile={isMobile}
                      matches={player.matches}
                    />
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  )
}
