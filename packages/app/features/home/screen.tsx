import { Text, View, H1, useSx } from 'dripsy'
import { SolitoImage } from 'solito/image'
import { MotiLink } from 'solito/moti'
import christmas from '../../assets/images/christmas.png'
import kitten from '../../assets/images/kitten.jpg'
import { MyBoxL, MyBoxS } from '../../components/my-boxes'
import { MyP, FormattedBlock } from '../../components/sections'
import { paragraphs } from 'app/assets/paragraphs'
import { Buttons } from 'app/components/my-buttons'
import { hexColors, namedColors } from 'app/assets/box-colors'

export function HomeScreen() {
  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        p: '$4',
        m: ['$8', '$16'],
        gap: ['$8', '$16'],
      }}
    >
      <Title />
      <Paragraphs />
      <SeparateBoxes />
      <Drawings />
      <BoxList />
      <Buttons />
    </View>
  )
}

function Title() {
  return (
    <H1 sx={{ fontWeight: '800', textAlign: 'center' }}>
      Solito example app with{' '}
      <MotiLink
        href="https://www.dripsy.xyz/"
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.9 : hovered ? 1.1 : 1,
          }
        }}
      >
        <Text sx={{ color: '$primary' }}>Dripsy</Text>
      </MotiLink>
    </H1>
  )
}

function Paragraphs() {
  return (
    <View sx={{ maxWidth: 1024 }}>
      {paragraphs.map((p, i) => (
        <MyP fontFamily={p[0]} key={i}>
          {[p[1], p[2]]}
        </MyP>
      ))}
    </View>
  )
}

function SeparateBoxes() {
  return (
    <FormattedBlock gap="$4" flexWrap="wrap">
      {[
        'Individual boxes with named colors:',
        namedColors.map((color, i) => (
          <MyBoxL backgroundColor={color} key={color + i} />
        )),
      ]}
    </FormattedBlock>
  )
}

function Drawings() {
  const sx = useSx()
  const w = [450, 600]
  const h = [300, 400]
  return (
    <FormattedBlock gap="$2" justifyContent="center" flexWrap="wrap">
      {[
        'Cute drawings:',
        <>
          <SolitoImage
            src={christmas}
            resizeMode="contain"
            style={sx({ width: w, height: h })}
            alt="A cute drawing for SasuSaku family on a Christmas day."
          />
          <SolitoImage
            src={kitten}
            resizeMode="contain"
            style={sx({ width: h, height: h })}
            alt="A cute Sasuke kitten with cherry blossom."
          />
        </>,
      ]}
    </FormattedBlock>
  )
}

function BoxList() {
  return (
    <FormattedBlock flexWrap="wrap" maxWidth={1024}>
      {[
        'A list of boxes with more colors:',
        hexColors.map((color, i) => (
          <MyBoxS backgroundColor={color} key={color + i} />
        )),
      ]}
    </FormattedBlock>
  )
}
