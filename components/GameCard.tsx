import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

interface Game {
  id: number
  title: string
  description: string
  image: string
  genre: string
  rating: number
  gameUrl?: string
}

interface GameCardProps {
  game: Game
  onPlayClick: (game: Game) => void
}

export default function GameCard({ game, onPlayClick }: GameCardProps) {
  const handlePlayClick = () => {
    if (game.gameUrl) {
      onPlayClick(game)
    }
  }
  return (
    <Grid item xs={6} sm={4} md={2.4} lg={2}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ height: { xs: 120, sm: 140, md: 140 }, objectFit: 'cover' }}
          image={game.image}
          alt={game.title}
        />
        <CardContent sx={{ pb: 1, flexGrow: 1, p: { xs: 1, sm: 1.25 } }}>
          <Box sx={{ mb: 0.75, display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 0.5 }}>
            <Typography 
              variant="subtitle2" 
              component="div" 
              sx={{ fontWeight: 600, fontSize: { xs: '0.85rem', sm: '0.9rem' }, lineHeight: 1.2 }}
              noWrap
            >
              {game.title}
            </Typography>
            <Chip 
              label={`★${game.rating}`} 
              size="small" 
              color="primary" 
              variant="outlined"
              sx={{ fontSize: '0.7rem', height: '20px' }}
            />
          </Box>
          <Chip 
            label={game.genre} 
            size="small" 
            sx={{ mb: 0.75, fontSize: '0.7rem', height: '20px' }}
          />
          <Typography 
            variant="caption" 
            sx={{ color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.8rem' }, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {game.description}
          </Typography>
        </CardContent>
        <Box sx={{ p: { xs: 0.75, sm: 1 }, pt: 0 }}>
          <Button 
            variant="contained" 
            size="small" 
            fullWidth 
            onClick={handlePlayClick}
            disabled={!game.gameUrl}
            sx={{ 
              backgroundColor: '#3b82f6', 
              fontSize: '0.75rem', 
              py: 0.75,
              '&:hover': { 
                backgroundColor: '#2563eb' 
              },
              '&:disabled': {
                backgroundColor: '#9ca3af',
                color: '#6b7280',
              }
            }}
          >
            {game.gameUrl ? 'Play' : 'Coming Soon'}
          </Button>
        </Box>
      </Card>
    </Grid>
  )
}
