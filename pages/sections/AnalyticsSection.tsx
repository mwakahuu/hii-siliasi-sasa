import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PlayerPerformanceTable from '../../components/PlayerPerformanceTable'

export default function AnalyticsSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 8 },
          px: { xs: 1, sm: 2 },
        }}
      >
        {/* Player Performance Table */}
        <PlayerPerformanceTable />
      </Box>
    </Container>
  )
}
