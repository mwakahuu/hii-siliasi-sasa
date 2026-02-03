import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import FounderCard from './FounderCard'
import ImageZoomModal from './ImageZoomModal'

interface FounderData {
  id: number
  image: string
  name: string
  description: string
  whatsapp: string
}

interface FoundersModalProps {
  open: boolean
  onClose: () => void
}

const foundersData: FounderData[] = [
  {
    id: 1,
    image: 'https://i.ibb.co/Gf3SgQNB/20251219-093940-1-1.jpg',
    name: 'Panya the Minister',
    description:
      'the co-founder of "Codeskytz company lmtd" , meme viber, software devloper, networking and cyber challenge. SIMBA NGUVU MOJA',
    whatsapp: '255623709042',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/nNGS700m/kasam.jpg',
    name: 'Alkasam Brainee',
    description:
      'university family CEO, online services zote mixer vyeti vya kuzaliwa na vifo hata kama hujafa, changamoto zote za chuo na HESLB DM "Nina malengo wadada msinitongoze',
    whatsapp: '255675166515',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/twD4Ps1L/20260108-185231.jpg',
    name: 'Big Phili',
    description:
      'HR By proffesional, the giant Big one, Handsome, footballer, kama unajiweza DLS DM, Manager counselor, kama unatafta ajira Dm. ODDS killer wazee wa mikeka DM.',
    whatsapp: '255672075711',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/rKFpp7sm/july.jpg',
    name: 'Ginn Ivan Daddy Savant',
    description:
      'Dokta, teacher, Lipa namba zote, laini, mabando na huduma zote za mitandao ya simu DM. Handsome wa Ubungo.',
    whatsapp: '255693129648',
  },
  {
    id: 5,
    image: 'https://i.ibb.co/gMjpb6wm/kiumbe.jpg',
    name: 'Tacitus',
    description:
      'MBAVU finest founder, Teacher, IT, cyber, matatizo yote ya mitandaoni plus Hacking DM.',
    whatsapp: '255756281296',
  },
  {
    id: 6,
    image: 'https://i.ibb.co/N2pxNP2Z/baraka.jpg',
    name: 'SIRTHEPROGRAMMER',
    description:
      'the CEO of "codeskytz company lmtd" The coder 22HRS per day coding, single man with focus women are scam, best hacker, kwa web building etc DM, kwa Hacking DM confidential issues',
    whatsapp: '255683568254',
  },
]

export default function FoundersModal({ open, onClose }: FoundersModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [zoomOpen, setZoomOpen] = useState(false)

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
    setZoomOpen(true)
  }

  const handleZoomClose = () => {
    setZoomOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
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
            fontWeight: 700,
            fontSize: '1.75rem',
            color: 'text.primary',
          }}
        >
          Meet Our Founders
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {foundersData.map((founder) => (
              <Grid item xs={12} sm={6} md={4} key={founder.id}>
                <FounderCard
                  image={founder.image}
                  name={founder.name}
                  description={founder.description}
                  whatsapp={founder.whatsapp}
                  onImageClick={handleImageClick}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>

      <ImageZoomModal
        open={zoomOpen}
        imageSrc={selectedImage || ''}
        onClose={handleZoomClose}
      />
    </>
  )
}
