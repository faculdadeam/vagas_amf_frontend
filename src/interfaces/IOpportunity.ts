interface IContact {
    type: string;
    value: string;
}

export default interface IOpportunity {
    id: string;
    name: string;
    description: string;
    contacts: IContact[];
    status: string;
    company: string;
    contractType: string; // clt, estagio...
    courses: string[];
    salary: string;
    workplaceType: string; // remoto, presencial...
    validUntil: Date;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}