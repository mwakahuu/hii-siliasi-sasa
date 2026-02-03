import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React from 'react'
import GameCard from '../../components/GameCard'
import GamePlayerModal from '../../components/GamePlayerModal'
import { gamesData } from '../../components/GamesData'

interface Game {
  id: number
  title: string
  description: string
  image: string
  genre: string
  rating: number
  gameUrl?: string
}

export default function GamesSection() {
  const [selectedGame, setSelectedGame] = React.useState<Game | null>(null)
  const [gameModalOpen, setGameModalOpen] = React.useState(false)

  const handlePlayClick = (game: Game) => {
    setSelectedGame(game)
    setGameModalOpen(true)
  }

  const handleCloseGameModal = () => {
    setGameModalOpen(false)
    setSelectedGame(null)
  }
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 8 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            mb: 1.5,
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2.25rem', md: '3rem' },
            fontFamily: '"Chewy", cursive',
            textAlign: 'center',
          }}
        >
          There is always a puzzle to solve
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          paragraph
          sx={{
            mb: 3,
            fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
            fontFamily: '"Chewy", cursive',
            textAlign: 'center',
          }}
        >
          enjoy your the game yajayo yanafurahisha
        </Typography>

        {/* Games Grid */}
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
          {gamesData.map((game) => (
            <GameCard key={game.id} game={game} onPlayClick={handlePlayClick} />
          ))}
        </Grid>

        {/* Game Player Modal */}
        <GamePlayerModal
          open={gameModalOpen}
          gameUrl={selectedGame?.gameUrl || ''}
          gameTitle={selectedGame?.title || ''}
          onClose={handleCloseGameModal}
        />
      </Box>
    </Container>
  )
}
