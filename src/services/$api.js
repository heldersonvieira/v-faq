import api from './api';

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            async get(path) {
                const response = await api.get(path);

                return response.data;
            },
        };
    },
};
