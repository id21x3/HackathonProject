import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getBudgetOverview = async (budgetId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/budget/${budgetId}/overview`);
        return response.data;
    } catch (error) {
        console.error('Error fetching budget overview:', error);
        throw error;
    }
};

export const getBudgetTransactions = async (budgetId, type = null) => {
    try {
        const url = `${API_BASE_URL}/budget/${budgetId}/transactions${type ? `?type=${type}` : ''}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching budget transactions:', error);
        throw error;
    }
};