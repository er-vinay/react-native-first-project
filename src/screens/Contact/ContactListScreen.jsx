import { FlatList, Text, View } from 'react-native';
import { users } from './userContactInfo';
import ContactItem from '../../components/ContactItem';
import { styles } from '../Contact/css/style';
const ContactListScreen = () => {

    const renderItem = ({ item }) => <ContactItem name={item.name} email={item.email} />;

    return (
        <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>}
            contentContainerStyle={styles.list}
        />
    );
};
export default ContactListScreen;