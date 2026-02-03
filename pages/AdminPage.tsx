import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { getAllPlayers, addPlayer, updatePlayer, deletePlayer, getPlayerMatches, addMatch, deleteMatch, initializeDatabase, type Match } from '../database'

interface User {
  id?: number
  name: string
  games: number
  points: number
  statusTrend: string
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  )
}

export default function AdminPage() {
  const [tabValue, setTabValue] = useState(0)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [openDialog, setOpenDialog] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    games: '',
    points: '',
    statusTrend: 'stable',
  })

  // Match state
  const [selectedPlayer, setSelectedPlayer] = useState<User | null>(null)
  const [matches, setMatches] = useState<Match[]>([])
  const [matchFormData, setMatchFormData] = useState({
    date: '',
    game: '',
    points: '',
    prize: '',
  })

  // Load players from database on mount
  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true)
        setError(null)
        await initializeDatabase()
        const players = await getAllPlayers()
        setUsers(players)
      } catch (err) {
        console.error('Failed to load players:', err)
        setError('Failed to load players from database')
      } finally {
        setLoading(false)
      }
    }
    loadPlayers()
  }, [])

  const handleAddClick = () => {
    setFormData({ name: '', games: '', points: '', statusTrend: 'stable' })
    setEditingId(null)
    setOpenDialog(true)
  }

  const handleEditClick = (user: User) => {
    setFormData({
      name: user.name,
      games: user.games.toString(),
      points: user.points.toString(),
      statusTrend: user.statusTrend,
    })
    setEditingId(user.id || null)
    setOpenDialog(true)
  }

  const handleDeleteClick = async (id: number | undefined) => {
    if (!id) return
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deletePlayer(id)
        setUsers(users.filter((user) => user.id !== id))
        setError(null)
      } catch (err) {
        console.error('Failed to delete player:', err)
        setError('Failed to delete player')
      }
    }
  }

  const handleSave = async () => {
    if (!formData.name || !formData.games || !formData.points) {
      alert('Please fill in all fields')
      return
    }

    try {
      const newUser: Omit<User, 'id'> = {
        name: formData.name,
        games: parseInt(formData.games),
        points: parseInt(formData.points),
        statusTrend: formData.statusTrend,
      }

      if (editingId) {
        const updated = await updatePlayer(editingId, newUser)
        if (updated) {
          setUsers(
            users.map((user) =>
              user.id === editingId
                ? { ...user, ...newUser }
                : user
            )
          )
        }
      } else {
        const added = await addPlayer(newUser)
        if (added) {
          setUsers([...users, added])
        }
      }
      setError(null)
      setOpenDialog(false)
    } catch (err) {
      console.error('Failed to save player:', err)
      setError('Failed to save player')
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setEditingId(null)
    setFormData({ name: '', games: '', points: '', statusTrend: 'stable' })
  }

  // Match handlers
  const handleOpenMatchDialog = async (player: User) => {
    setSelectedPlayer(player)
    if (player.id) {
      const playerMatches = await getPlayerMatches(player.id)
      setMatches(playerMatches)
    }
  }

  const handleAddMatch = async () => {
    if (!selectedPlayer?.id || !matchFormData.date || !matchFormData.game || !matchFormData.points || !matchFormData.prize) {
      alert('Please fill in all match fields')
      return
    }

    try {
      const newMatch: Omit<Match, 'id'> = {
        player_id: selectedPlayer.id,
        date: matchFormData.date,
        game: matchFormData.game,
        points: parseInt(matchFormData.points),
        prize: matchFormData.prize,
      }

      const added = await addMatch(newMatch)
      if (added) {
        setMatches([...matches, added])
        setMatchFormData({ date: '', game: '', points: '', prize: '' })
        setError(null)
      }
    } catch (err) {
      console.error('Failed to add match:', err)
      setError('Failed to add match')
    }
  }

  const handleDeleteMatch = async (matchId: number | undefined) => {
    if (!matchId) return
    if (window.confirm('Delete this match?')) {
      try {
        await deleteMatch(matchId)
        setMatches(matches.filter((m) => m.id !== matchId))
        setError(null)
      } catch (err) {
        console.error('Failed to delete match:', err)
        setError('Failed to delete match')
      }
    }
  }

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 8 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            mb: 4,
          }}
        >
          Admin Dashboard
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
            <Tab label="Players" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Matches" id="tab-1" aria-controls="tabpanel-1" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Manage Players
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddClick}
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              Add Player
            </Button>
          </Box>

        <Box sx={{ overflowX: 'auto', width: '100%' }}>
          <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f0f4f8' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Games
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                    Points
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Status
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="right">{user.games}</TableCell>
                    <TableCell align="right">{user.points}</TableCell>
                    <TableCell align="center">
                      <Typography
                        sx={{
                          color: user.statusTrend === 'up' ? '#10b981' : '#ef4444',
                          fontWeight: 600,
                        }}
                      >
                        {user.statusTrend === 'up' ? '📈 Up' : '📉 Down'}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        size="small"
                        onClick={() => handleEditClick(user)}
                        sx={{ color: '#3b82f6', mr: 1 }}
                        title="Edit Player"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleOpenMatchDialog(user)}
                        sx={{ color: '#10b981', mr: 1 }}
                        title="Manage Matches"
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteClick(user.id)}
                        sx={{ color: '#ef4444' }}
                        title="Delete Player"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Manage Recent Matches
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Select a player from the Players tab and click the green + button to add matches for that player
          </Typography>
          {selectedPlayer ? (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Matches for: <strong>{selectedPlayer.name}</strong>
              </Typography>
              <Box sx={{ overflowX: 'auto', width: '100%', mb: 3 }}>
                <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 2 }}>
                  <Table size="small">
                    <TableHead sx={{ backgroundColor: '#f0f4f8' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Game</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Points</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Prize</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {matches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell>{match.date}</TableCell>
                          <TableCell>{match.game}</TableCell>
                          <TableCell align="right">{match.points}</TableCell>
                          <TableCell>{match.prize}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteMatch(match.id)}
                              sx={{ color: '#ef4444' }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box sx={{ p: 2, backgroundColor: '#f9fafb', borderRadius: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Add New Match
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Date"
                    type="date"
                    value={matchFormData.date}
                    onChange={(e) => setMatchFormData({ ...matchFormData, date: e.target.value })}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                  <TextField
                    label="Game"
                    value={matchFormData.game}
                    onChange={(e) => setMatchFormData({ ...matchFormData, game: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Points"
                    type="number"
                    value={matchFormData.points}
                    onChange={(e) => setMatchFormData({ ...matchFormData, points: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Prize"
                    value={matchFormData.prize}
                    onChange={(e) => setMatchFormData({ ...matchFormData, prize: e.target.value })}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddMatch}
                    sx={{
                      backgroundColor: '#3b82f6',
                      '&:hover': {
                        backgroundColor: '#2563eb',
                      },
                      mt: 1,
                    }}
                  >
                    Add Match
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : (
            <Typography sx={{ color: 'text.secondary' }}>
              No player selected. Go to Players tab to manage matches.
            </Typography>
          )}
        </TabPanel>

        {/* Add/Edit Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontWeight: 'bold' }}>
            {editingId ? 'Edit User' : 'Add New User'}
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Games"
                type="number"
                value={formData.games}
                onChange={(e) => setFormData({ ...formData, games: e.target.value })}
                fullWidth
              />
              <TextField
                label="Points"
                type="number"
                value={formData.points}
                onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                fullWidth
              />
              <TextField
                label="Status Trend"
                select
                value={formData.statusTrend}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    statusTrend: e.target.value,
                  })
                }
                SelectProps={{
                  native: true,
                }}
                fullWidth
              >
                <option value="up">Up</option>
                <option value="down">Down</option>
                <option value="stable">Stable</option>
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={handleSave}
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                '&:hover': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              {editingId ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  )
}
