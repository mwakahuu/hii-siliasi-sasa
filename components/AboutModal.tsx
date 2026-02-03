import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

interface AboutModalProps {
  open: boolean
  onClose: () => void
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundColor: 'background.paper',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 0,
        }}
      >
        <Box sx={{ flex: 1 }} />
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              mb: 1,
            }}
          >
            MEME VIBER
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            USIPOSTI MPENZI, POST MEME
          </Typography>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            Kuhusu MEME VIBER
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            Hii ni tovuti ya kisasa ya kutengeneza memez kwa urahisi na haraka.
            Inakupa nafasi ya kubuni memez zako mwenyewe kwa kuchagua rangi,
            maandishi, na stika bila ujuzi wa kubuni (design skills).
          </Typography>
        </Box>

        {/* How it Works */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            Jinsi Inavyofanya Kazi
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            Mtumiaji anaweza kuandika moja kwa moja kwenye ubao, kubadilisha
            muonekano wa meme papo hapo, kisha kuipakua au kuituma moja kwa moja
            kwenye chanel yetu ya WhatsApp ili ishirikiwe na wengine.
          </Typography>
        </Box>

        {/* Our Goal */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            Lengo Letu
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            Lengo letu ni kutoa jukwaa rahisi, la kufurahisha, na la kisasa
            linalowezesha kila mtu kuwa mbunifu wa memez na kushiriki ubunifu
            wake kwa urahisi.
          </Typography>
        </Box>

        {/* Features */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Huduma Zetu
          </Typography>
          <List sx={{ pl: 2 }}>
            {[
              'Tengeneza memez kwa haraka na kwa urahisi',
              'Chagua rangi mbalimbali',
              'Ongeza maandishi kwa kuchagua fonti zako',
              'Tumia stika za kufurahisha',
              '⬇ Pakua meme yako kama picha',
              'Shiriki moja kwa moja kwenye WhatsApp',
            ].map((feature, index) => (
              <ListItem
                key={index}
                sx={{
                  py: 0.5,
                  px: 0,
                }}
              >
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    sx: {
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', borderTop: '1px solid', borderColor: 'divider', pt: 3 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1,
            }}
          >
            Asante kwa kuwa sehemu ya MEME VIBER!
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
            }}
          >
            MAPENZI JAU TUTENGENEZE MEMEZ
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
