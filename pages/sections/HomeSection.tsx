import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function HomeSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 8 },
          px: { xs: 1, sm: 2 },
          minHeight: '100vh',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontFamily: '"Black Ops One", cursive',
            color: '#3b82f6',
            textAlign: 'center',
          }}
        >
          Home of meme makers
        </Typography>

        {/* Add Button and Image Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mb: 4 }}>
          <a 
            onClick={() => {
              window.location.href = "/addition/home1.html"
            }}
            style={{
              cursor: 'pointer',
              outline: 'none',
              border: 'none',
              background: 'transparent',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s duration-300',
              textDecoration: 'none',
            }}
      
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(90deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
            title="Add New"
          >
            <svg
              viewBox="0 0 24 24"
              height="50px"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                strokeWidth: 1.5,
                transition: 'all 0.3s duration-300',
                stroke: '#14b8a6',
                fill: 'none',
              }}
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              />
              <path d="M8 12H16" />
              <path d="M12 16V8" />
            </svg>
          </a>
          
          <Box
            component="button"
            onClick={() => window.open('https://whatsapp.com/channel/0029VavRpOF002TGkGkPES2Y')}
            sx={{
              cursor: 'pointer',
              outline: 'none',
              border: 'none',
              background: 'transparent',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
            title="Communication"
          >
            <Box
              component="img"
              src="https://i.ibb.co/4nW2N0hH/communication-17424810.png"
              alt="Communication"
              sx={{
                width: '50px',
                height: '50px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

        {/* Home content will be added here */}
      </Box>
    </Container>
  )
}
