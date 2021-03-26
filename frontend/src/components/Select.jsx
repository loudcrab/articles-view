import { Select as SelectThemeUI, Box } from 'theme-ui'

export const Select = ({ options, handleChange, value }) => {
  return (
    <Box
      sx={{
        margin: '16px',
      }}
    >
      <SelectThemeUI onChange={(e) => handleChange(e.target.value)}  value={value}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </SelectThemeUI>
    </Box>
  )
}
