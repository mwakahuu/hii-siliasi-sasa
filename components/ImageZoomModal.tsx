import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'

interface ImageZoomModalProps {
  open: boolean
  imageSrc: string
  onClose: () => void
}

export default function ImageZoomModal({
  open,
  imageSrc,
  onClose,
}: ImageZoomModalProps) {
  const [zoom, setZoom] = useState(100)

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(50, Math.min(300, prev + delta)))
  }

  React.useEffect(() => {
    setZoom(100)
  }, [imageSrc])

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton
              size="small"
              onClick={() => handleZoom(-10)}
              sx={{ color: 'primary.main' }}
            >
              <ZoomOutIcon />
            </IconButton>
            <Typography sx={{ minWidth: 50, textAlign: 'center', fontWeight: 600 }}>
              {zoom}%
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleZoom(10)}
              sx={{ color: 'primary.main' }}
            >
              <ZoomInIcon />
            </IconButton>
          </Box>
          <IconButton onClick={onClose} sx={{ ml: 'auto' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            backgroundColor: 'action.hover',
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt="Zoomed"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              transform: `scale(${zoom / 100})`,
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>
      </Box>
    </Dialog>
  )
}
