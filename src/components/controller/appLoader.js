import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e16a03abb21d4a64b09b17d1ef7ad7cf', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
