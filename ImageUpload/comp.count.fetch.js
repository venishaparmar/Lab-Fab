const axios = require('axios');

exports.getCompCount = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/components/count');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Component count');
    }
};