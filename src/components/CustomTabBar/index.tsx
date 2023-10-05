import React from 'react'
import { Text, View} from 'react-native'
import { Container, SecondView,ButtonTab, ThirdView, ButtonView, ContainerButton } from './style'
import { MaterialIcons} from '@expo/vector-icons'

export interface ViewType {
  backgroundColor: string | boolean
}

const CustomTabBar = ({ state, descriptors, navigation}) => {
  return (
    <Container>
      <SecondView>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate( route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return(
            <ButtonTab
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            >
              <ButtonView>
                <ThirdView backgroundColor={isFocused ? '#f8e2fd' : 'transparent'}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? '#8f2abd' : '#535353'}
                  />
                </ThirdView>
              </ButtonView>
            </ButtonTab>
          )
        })}
      </SecondView>

    </Container>
  )
}

export default CustomTabBar
