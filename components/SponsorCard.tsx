import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

interface Sponsor {
  id: number
  name: string
  category: string
  image: string
  description: string
  tier: string
}

interface SponsorCardProps {
  sponsor: Sponsor
}

const tierColors: { [key: string]: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' } = {
  Platinum: 'primary',
  Gold: 'warning',
  Silver: 'default',
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          sx={{ height: { xs: 150, sm: 180, md: 200 } }}
          image={sponsor.image}
          alt={sponsor.name}
        />
        <CardContent sx={{ pb: 1.5, flexGrow: 1 }}>
          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ fontWeight: 'bold', fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' } }}
            >
              {sponsor.name}
            </Typography>
          </Box>
          <Box sx={{ mb: 1.5, display: 'flex', gap: 1 }}>
            <Chip 
              label={sponsor.category} 
              size="small" 
            />
            <Chip 
              label={sponsor.tier} 
              size="small" 
              color={tierColors[sponsor.tier]}
              variant="outlined"
            />
          </Box>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary', fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.95rem' } }}
          >
            {sponsor.description}
          </Typography>
        </CardContent>
        <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 }, pt: 0 }}>
          <Button variant="outlined" size="small" fullWidth>
            Learn More
          </Button>
        </Box>
      </Card>
    </Grid>
  )
}
