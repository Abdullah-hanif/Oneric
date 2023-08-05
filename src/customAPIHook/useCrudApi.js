import { useState, useCallback, useEffect } from 'react';
const useCrudApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // baseUrl
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const fetchData = useCallback(async (url, method = 'GET', body = null) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        'Content-Type': 'application/json',
        // Add any other headers you need
      };

      const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);
      const responseData = await response?.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }

      setData(responseData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // call a callbacks as per user request========>

  // for get req
  const get = useCallback(async (url) => {
    await
      fetchData(`${baseUrl}/${url}`);
  }, [fetchData]);

  // for get by unique id
  const getById = useCallback(async (url, id) => {
    await fetchData(`${baseUrl}/${url}/${id}`);
  }, [fetchData]);

  // for post data
  const post = useCallback(async (url, body) => {
    await fetchData(`${baseUrl}/${url}`, 'POST', body);
  }, [fetchData]);

  // for update data with passing unique id and replace value in body
  const put = useCallback(async (url, id, body) => {
    await fetchData(`${baseUrl}/${url}/${id}`, 'PUT', body);
  }, [fetchData]);

  // for remove item by id
  const remove = useCallback(async (url, id) => {
    await fetchData(`${baseUrl}/${url}/${id}`, 'DELETE');
  }, [fetchData]);

  // as a exports all params as per your use a/c your apis
  return { data, loading, error, get, getById, post, put, remove };
};

export default useCrudApi;
