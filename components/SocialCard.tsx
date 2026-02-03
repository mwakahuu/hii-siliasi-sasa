import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone'
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone'
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

interface SocialPost {
  id: number
  author: string
  avatar: string
  image: string
  content: string
  likes: number
  comments: number
  timestamp: string
}

interface SocialCardProps {
  post: SocialPost
}

export default function SocialCard({ post }: SocialCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={6}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 4,
          },
        }}
      >
        {/* Author Info */}
        <Box sx={{ p: { xs: 1.5, sm: 2 }, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={post.avatar} alt={post.author} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              {post.author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {post.timestamp}
            </Typography>
          </Box>
        </Box>

        {/* Post Image */}
        <CardMedia
          component="img"
          height="300"
          sx={{ height: { xs: 200, sm: 250, md: 300 } }}
          image={post.image}
          alt="Post"
        />

        {/* Post Content */}
        <CardContent sx={{ pb: 1, flexGrow: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ fontSize: { xs: '0.9rem', sm: '0.95rem' } }}
          >
            {post.content}
          </Typography>
        </CardContent>

        {/* Engagement Stats and Actions */}
        <Box sx={{ px: { xs: 1.5, sm: 2 }, pb: { xs: 1.5, sm: 2 } }}>
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ mb: 1, display: 'block' }}
          >
            {post.likes} likes • {post.comments} comments
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1 }}>
            <IconButton size="small" sx={{ flex: 1 }}>
              <FavoriteBorderTwoToneIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </IconButton>
            <IconButton size="small" sx={{ flex: 1 }}>
              <ChatBubbleOutlineTwoToneIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </IconButton>
            <IconButton size="small" sx={{ flex: 1 }}>
              <ShareTwoToneIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}
