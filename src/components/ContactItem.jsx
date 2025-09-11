import { View, Text } from 'react-native';
import { styles } from '../screens/Contact/css/style';
const ContactItem = ({name, email}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    );
};
export default ContactItem;