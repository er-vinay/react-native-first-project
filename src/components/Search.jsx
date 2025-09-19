import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { API_ENDPOINTS } from '../constants/api';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (text) => {
        setQuery(text);
        if (onSearch) {
            onSearch(text);
        }
    };

    useEffect(() => {
        axios.get(API_ENDPOINTS.USERS)
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }, [query]);

    const filteredResults = results.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.email.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={query}
                onChangeText={handleChange}
                autoCorrect={false}
                autoCapitalize="none"
                clearButtonMode="while-editing"
            />
            <FlatList 
                data={filteredResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ fontSize: 16 }}>{item.name}</Text>
                        <Text style={{ color: '#666' }}>{item.email}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default Search;