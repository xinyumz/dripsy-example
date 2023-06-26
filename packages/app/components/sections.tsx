import { View, Row, P, Text } from 'dripsy'
import { Subtitle } from './my-texts'

export function MyP({
  children,
  fontFamily,
}: {
  children: React.ReactNode[]
  fontFamily?: string
}) {
  return (
    <P
      sx={{
        textAlign: 'justify',
        fontFamily: fontFamily,
      }}
    >
      <Text sx={{ fontWeight: 'bold' }}>{children[0]}</Text>
      {children[1]}
    </P>
  )
}

export function FormattedBlock({
  children,
  maxWidth,
  gap,
  justifyContent,
  flexWrap,
}: {
  children: React.ReactNode[]
  maxWidth?: string | number
  gap?: string | number
  justifyContent?: string
  flexWrap?: any
}) {
  return (
    <View sx={{ gap: '$2', maxWidth: maxWidth }}>
      <Subtitle>{children[0]}</Subtitle>
      <Row
        sx={{ gap: gap, flexWrap: flexWrap, justifyContent: justifyContent }}
      >
        {children[1]}
      </Row>
    </View>
  )
}
