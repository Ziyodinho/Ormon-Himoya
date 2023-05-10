import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';

const customIcons = () => {
  const styles = StyleSheet.create({
    icon: {
      fontFamily: 'Ubuntu-Regular',
    },
  });

  // применяем стиль к иконкам
  Icon.defaultProps.style = styles.icon;
};

export default customIcons;
