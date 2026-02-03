import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { SvgIconProps } from '@mui/material/SvgIcon'

export default function StatusIndicator({ trend }: { trend: 'up' | 'down' }) {
  const iconProps: SvgIconProps = {
    fontSize: 'large',
    sx: {
      width: '1.5rem',
      height: '1.5rem',
      ml: 1,
    },
  }

  if (trend === 'up') {
    return (
      <ArrowDropUpIcon {...iconProps} sx={{ color: 'success.main', ...iconProps.sx }} />
    )
  }
  return (
    <ArrowDropDownIcon {...iconProps} sx={{ color: 'error.main', ...iconProps.sx }} />
  )
}
