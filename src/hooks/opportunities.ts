import api from '../services/api';

export const getOpportunities = () => {
    return api.get('/opportunities');
}