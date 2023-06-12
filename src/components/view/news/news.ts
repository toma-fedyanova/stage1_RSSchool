import './news.css';
import { NewsData } from '../../../types/index';

class News {
    draw(data: NewsData[]) {
        const news: NewsData[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
         console.log(data);
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsData, idx: number) => {
           if (newsItemTemp instanceof HTMLTemplateElement){
               const newsClone = newsItemTemp.content.cloneNode(true) as Element;
              if (!(newsItemTemp instanceof DocumentFragment)){
                throw new Error ();
                 }
                 if (idx % 2) {
                    const elem = newsClone.querySelector('.news__item') as HTMLDivElement;
                    elem.classList.add('alt');
                }
                   const photo = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                   photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                   const author =  newsClone.querySelector('.news__meta-author') as HTMLLIElement;
                   author.textContent = item.author || item.sourse.name;
                   const date = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
                   date.textContent = item.publishedAt
                     .slice(0, 10)
                     .split('-')
                     .reverse()
                     .join('-');
                   
                     const title = newsClone.querySelector('.news__description-title') as HTMLElement;
                     title.textContent = item.title;
                     const sourc = newsClone.querySelector('.news__description-source') as HTMLElement;
                     sourc.textContent = item.sourse.name;
                     const cont =  newsClone.querySelector('.news__description-content') as HTMLParagraphElement;
                     cont.textContent = item.description;
                     const info = newsClone.querySelector('.news__read-more a') as HTMLParagraphElement;
                     info.setAttribute('href', item.url);
     
                 fragment.append(newsClone);
             }
           });
        const block = document.querySelector('.news') as HTMLDivElement;
        block.innerHTML = '';
        block.appendChild(fragment);
    }
}

export default News;
