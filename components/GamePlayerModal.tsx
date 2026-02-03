import React from 'react'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'

interface GamePlayerModalProps {
  open: boolean
  gameUrl: string
  gameTitle: string
  onClose: () => void
}

export default function GamePlayerModal({
  open,
  gameUrl,
  gameTitle,
  onClose,
}: GamePlayerModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: '#000',
          margin: 0,
          borderRadius: 0,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            zIndex: 10,
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Game Iframe */}
        <Box
          component="iframe"
          src={gameUrl}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            zIndex: 1,
          }}
          title={gameTitle}
        />
      </Box>
    </Dialog>
  )
}
