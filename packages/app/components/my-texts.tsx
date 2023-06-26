import { Text } from 'dripsy'

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      sx={{
        fontWeight: 'bold',
        fontSize: ['$3', '$5'],
        mb: '$2',
      }}
    >
      {children}
    </Text>
  )
}
