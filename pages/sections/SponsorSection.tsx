import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SponsorSection() {
  const advantages = [
    {
      title: '🎯 Account Promotion',
      description: 'Get your account featured across our platform with special badges, highlighted profiles, and premium visibility to reach our entire community of 50k+ members.',
    },
    {
      title: '📢 Business Advertisement',
      description: 'Advertise your business to a highly engaged gaming community. Leverage our platform to showcase your products and services to potential customers.',
    },
    {
      title: '👥 Followers',
      description: 'Gain access to our engaged community and build your follower base. Increase your reach and grow your audience within the gaming ecosystem.',
    },
    {
      title: '🎁 New Customers',
      description: 'Connect with thousands of active users and potential customers. Expand your customer base through targeted exposure to our community.',
    },
    {
      title: '🤝 Partnership with Us',
      description: 'Build a long-term partnership with our growing platform. Collaborate on exclusive events, promotional campaigns, and joint ventures for mutual growth.',
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 3, sm: 5, md: 8 },
          px: { xs: 1, sm: 2 },
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          borderRadius: 4,
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(30px)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite reverse',
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              textAlign: 'center',
              fontFamily: '"Chewy", cursive',
              color: '#fff',
              textShadow: '3px 3px 0px rgba(0,0,0,0.3), 6px 6px 0px rgba(0,0,0,0.2)',
              transform: 'rotate(-2deg)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'rotate(0deg) scale(1.05)',
              },
            }}
          >
             You wanna be a sponsor? 
          </Typography>

          <Typography 
            sx={{
              mb: 4,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              textAlign: 'center',
              fontFamily: '"Chewy", cursive',
              color: '#fff',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
            }}
          >
            Sponse Challenges & Get Amazing Benefits!
          </Typography>

          {/* GIF */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 5,
            }}
          >
            <Box
              component="img"
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NXJqa2NkcWEwangwbmZxZHo1eGt6eGJ5NXR1NzQ4bmc0dGgyODdyYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Xpvmu9xz9AWfbQw6T0/giphy.gif"
              alt="Sponsor"
              sx={{
                maxWidth: { xs: '100%', sm: '400px', md: '500px' },
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '5px solid #e7dbdb',
                transform: 'rotate(-3deg)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(3deg) scale(1.05)',
                },
              }}
            />
          </Box>

          {/* Community Stats */}
          <Box
            sx={{
              mb: 6,
              p: 3,
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transform: 'rotate(2deg)',
              border: '4px dashed #667eea',
            }}
          >
            <Typography 
              sx={{
                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
                textAlign: 'center',
                fontFamily: '"Chewy", cursive',
                color: '#667eea',
                fontWeight: 'bold',
              }}
            >
               we have more than 50k+  Community Members! 
            </Typography>
          </Box>

          {/* Advantages Section with Accordion */}
          <Box
            sx={{
              mb: 4,
              maxWidth: { xs: '100%', md: '900px' },
              mx: 'auto',
            }}
          >
            <Typography 
              variant="h4" 
              sx={{
                mb: 4,
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
                textAlign: 'center',
                fontFamily: '"Chewy", cursive',
                color: '#fff',
                textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              }}
            >
              ✨ Why you should sponsor us? ✨
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {advantages.map((advantage, index) => (
                <Accordion 
                  key={index}
                  sx={{
                    border: '3px solid #fff',
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.95)',
                    transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: index % 2 === 0 ? 'rotate(0deg) scale(1.02)' : 'rotate(0deg) scale(1.02)',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                    },
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem' }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      background: 'linear-gradient(135deg, #314dbb 0%, #18273a 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #c12424 0%, #667eea 100%)',
                      },
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                        fontWeight: 700,
                        fontFamily: '"Chewy", cursive',
                        color: '#fff',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      {advantage.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      py: { xs: 2, sm: 2.5 },
                      px: { xs: 2, sm: 3 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        lineHeight: 1.8,
                        color: '#333',
                        fontWeight: 500,
                      }}
                    >
                      {advantage.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
