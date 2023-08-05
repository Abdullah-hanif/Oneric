import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import useCrudApi from './useCrudApi';

const UsingExample = () => {
  const { data, loading, error, get, post, put, remove } = useCrudApi();

  useEffect(() => {
    // Initial data fetch
    get('posts')
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <View>
          {/* Display your data */}
        </View>
      )}

      {/* Buttons to trigger other CRUD operations */}
      <Button title="Create" onPress={() => post('products', { /* Your data here */ })} />

      {/* Button to trigger PUT request */}
      <Button title="Update" onPress={() => put('products', 1, { /* Updated data here */ })} />

      {/* Button to trigger DELETE request */}
      <Button title="Delete" onPress={() => remove('products', 1)} />

      {/* Button to trigger GET request by ID */}
      <Button title="Get by ID" onPress={() => getById('products', 1)} />
    </View>
  );
};

export default UsingExample;
