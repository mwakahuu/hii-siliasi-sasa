import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

interface FounderCardProps {
  image: string
  name: string
  description: string
  whatsapp: string
  onImageClick: (src: string) => void
}

export default function FounderCard({
  image,
  name,
  description,
  whatsapp,
  onImageClick,
}: FounderCardProps) {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsapp}?text=Hello%20${encodeURIComponent(name)}!`
    window.open(url, '_blank')
  }

  return (
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
        image={image}
        alt={name}
        sx={{
          height: 280,
          objectFit: 'cover',
          cursor: 'pointer',
        }}
        onClick={() => onImageClick(image)}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 700, color: 'text.primary' }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            flexGrow: 1,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            endIcon={<WhatsAppIcon />}
            onClick={handleWhatsAppClick}
            sx={{
              backgroundColor: '#25D366',
              color: 'white',
              flex: 1,
            }}
          >
            DM
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
