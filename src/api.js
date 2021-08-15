import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:5500/",
});

export const homeApi= {
    chartData: () => api.get("chartData"),
}
export const accountApi= {
    getAccount: () => api.get("account"),
}
export const companyApi= {
    getCompany: () => api.get("company"),
}
export const productApi= {
    getProduct: () => api.get("product"),
}