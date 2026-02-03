import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

interface AnalyticsItem {
  label: string
  value: string
  percentage: number
}

interface AnalyticsCardProps {
  data: AnalyticsItem
}

export default function AnalyticsCard({ data }: AnalyticsCardProps) {
  return (
    <Grid item xs={12} sm={6} md={3}>
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
        <CardContent>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mb: 1, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
          >
            {data.label}
          </Typography>
          <Typography 
            variant="h5" 
            component="div"
            sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            {data.value}
          </Typography>
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ mb: 1, display: 'block' }}
          >
            {data.percentage}% of target
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={data.percentage}
            sx={{ height: 6, borderRadius: 3 }}
          />
        </CardContent>
      </Card>
    </Grid>
  )
}
