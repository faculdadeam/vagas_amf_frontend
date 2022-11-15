import IOpportunity from '../interfaces/IOpportunity';
import api from '../services/api';

export const getOpportunities = () => {
    return api.get('/opportunities');
}

export const createOpportunity = (opportunity: IOpportunity) => {
    return api.post('/opportunities',
        opportunity
    );
}