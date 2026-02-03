import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const Loader = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  gap: '10px',
  marginBottom: theme.spacing(3),
  '&:before, &:after': {
    content: '""',
    height: { xs: '16px', sm: '20px', md: '24px' },
    aspectRatio: '1',
    borderRadius: '50%',
    background:
      'linear-gradient(#222 0 0) top/100% 40% no-repeat, radial-gradient(farthest-side,#000 95%,#0000) 50%/8px 8px no-repeat #fff',
    animation: 'l7 1.5s infinite alternate ease-in',
  },
  '@keyframes l7': {
    '0%, 70%': {
      backgroundSize: '100% 40%, 8px 8px',
    },
    '85%': {
      backgroundSize: '100% 120%, 8px 8px',
    },
    '100%': {
      backgroundSize: '100% 40%, 8px 8px',
    },
  },
}))

export default function SocialSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 3, sm: 5, md: 8 },
          px: { xs: 1, sm: 2 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Loader />
        
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            mb: { xs: 2, sm: 3, md: 4 },
            fontWeight: 'bold',
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Coming Soon
        </Typography>

        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{
            fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
            textAlign: 'center',
            maxWidth: { xs: '280px', sm: '400px', md: '600px' },
            lineHeight: 1.6,
          }}
        >
          We're working on something amazing for our community
        </Typography>
      </Box>
    </Container>
  )
}
