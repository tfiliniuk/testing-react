import { Typography, useTheme } from '@mui/material'

export const MuiModel = () => {
  const theme = useTheme()
  return <Typography component="h1">{`${theme.palette.mode} model`}</Typography>
}
