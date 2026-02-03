import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import StatusIndicator from './StatusIndicator'
import { type Match } from '../database'

interface RowProps {
  row: {
    name: string
    games: number
    points: number
    status: string
  }
  rank: number
  totalRows: number
  isMobile?: boolean
  matches?: Match[]
}

export default function PlayerStatsRow(props: RowProps) {
  const { row, rank, totalRows, isMobile = false, matches = [] } = props
  const [open, setOpen] = React.useState(false)

  // Conditional background color logic
  let rowBgColor = ''
  let hoverBgColor = 'rgba(0, 0, 0, 0.04)'

  if (rank === 1) {
    // Green color for the first row
    rowBgColor = '#8bf77f'
    hoverBgColor = '#7FFF7F'
  } else if (rank === totalRows) {
    // Red color for the last row
    rowBgColor = '#fa3838'
    hoverBgColor = '#FF6B6B'
  } else {
    // Light blue color for middle rows
    rowBgColor = '#ADD8E6'
    hoverBgColor = '#87CEEB'
  }

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
          backgroundColor: rowBgColor,
          '&:hover': {
            backgroundColor: hoverBgColor,
          },
        }}
      >
        <TableCell sx={{ padding: { xs: '8px 4px', sm: '12px' } }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ padding: { xs: '4px', sm: '8px' } }}
          >
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} /> : <KeyboardArrowDownIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
          {rank}
        </TableCell>
        <TableCell sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontSize: { xs: '0.8rem', sm: '0.875rem' }, maxWidth: { xs: '80px', sm: 'auto' }, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</TableCell>
        <TableCell align="right" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>{row.games}</TableCell>
        <TableCell align="right" sx={{ padding: { xs: '8px 4px', sm: '12px' }, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>{row.points}</TableCell>
        <TableCell align="center" sx={{ padding: { xs: '8px 4px', sm: '12px' } }}>
          <StatusIndicator trend={row.status} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: { xs: '0.5rem', sm: '1rem' } }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Recent Matches
              </Typography>
              <Table size="small" aria-label="recent matches">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>Date</TableCell>
                    <TableCell sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>Game</TableCell>
                    <TableCell align="right" sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>Points</TableCell>
                    <TableCell align="right" sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>Prize</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matches.map((match) => (
                    <TableRow key={match.id}>
                      <TableCell component="th" scope="row" sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                        {match.date}
                      </TableCell>
                      <TableCell sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' }, maxWidth: { xs: '70px', sm: 'auto' }, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{match.game}</TableCell>
                      <TableCell align="right" sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>{match.points}</TableCell>
                      <TableCell align="right" sx={{ padding: { xs: '6px 4px', sm: '8px' }, fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
                        {match.prize}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}
