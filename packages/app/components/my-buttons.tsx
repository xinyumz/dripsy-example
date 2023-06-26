import { useState } from 'react'
import { View, Text, Pressable, useDripsyTheme } from 'dripsy'
import { Modal, Alert } from 'react-native'
import { Subtitle } from './my-texts'

export function Buttons() {
  return (
    <View sx={{ gap: '$4', alignItems: 'center' }}>
      <Subtitle>Interactive buttons: </Subtitle>
      <CountButton />
      <ModalButton />
    </View>
  )
}

function CountButton() {
  const [count, setCount] = useState(0)
  return (
    <View sx={{ gap: '$1', alignItems: 'center' }}>
      <MyButton
        defaultColor="dodgerblue"
        pressedColor="deepskyblue"
        onPress={() => setCount(count + 1)}
      >
        CLICK ME
      </MyButton>
      <Text sx={{ fontSize: '$3' }}>
        You've clicked{' '}
        <Text sx={{ color: '$primary', fontWeight: 'bold' }}>{count}</Text>{' '}
        times!
      </Text>
    </View>
  )
}

function ModalButton() {
  const { theme } = useDripsyTheme()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View sx={{ gap: '$1', alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View
          sx={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            sx={{
              gap: '$4',
              m: '$4',
              backgroundColor: 'white',
              borderRadius: 16,
              p: '$8',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Text sx={{ textAlign: 'center', fontSize: '$2' }}>
              Surprise!! I'm a pop-up modal!
            </Text>
            <MyButton
              defaultColor={theme.colors?.$primary}
              pressedColor={theme.colors?.$secondary}
              px={32}
              fontSize="$2"
              onPress={() => setModalVisible(!modalVisible)}
            >
              Click here to hide me
            </MyButton>
          </View>
        </View>
      </Modal>

      <MyButton
        defaultColor="hotpink"
        pressedColor="pink"
        onPress={() => setModalVisible(true)}
      >
        PRESS ME
      </MyButton>
      <Text sx={{ fontSize: '$3' }}>Press and see what happens!</Text>
    </View>
  )
}

function MyButton({
  children,
  defaultColor,
  pressedColor,
  px,
  fontSize,
  onPress,
}: {
  children: React.ReactNode
  defaultColor: any
  pressedColor: any
  px?: number | string
  fontSize?: number | string
  onPress?: () => void
}) {
  return (
    <Pressable
      sx={{
        borderRadius: 16,
        px: px ? px : 48,
        py: 10,
        justifyContent: 'center',
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedColor : defaultColor,
        },
      ]}
      onPress={onPress}
    >
      <Text
        sx={{
          textAlign: 'center',
          fontSize: fontSize ? fontSize : '$3',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {children}
      </Text>
    </Pressable>
  )
}
