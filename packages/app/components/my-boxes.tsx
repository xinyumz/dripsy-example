import { Text, Box } from 'dripsy'

export function MyBoxL({ backgroundColor }: { backgroundColor: string }) {
  const length = [128, 160, 208]

  return (
    <Box
      sx={{
        width: length,
        height: length,
        backgroundColor: backgroundColor,
        borderStyle: 'solid',
        borderRadius: '12px',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: ['$1', '$2', '$3'],
          color: 'white',
        }}
      >
        {backgroundColor}
      </Text>
    </Box>
  )
}

export function MyBoxS({ backgroundColor }: { backgroundColor: string }) {
  const length = [80, 128, 160]
  return (
    <Box
      sx={{
        width: length,
        height: length,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: ['$0', '$1', '$2'],
          color: 'white',
        }}
      >
        {backgroundColor}
      </Text>
    </Box>
  )
}
