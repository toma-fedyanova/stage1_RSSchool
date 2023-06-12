import './sources.css';
import { NewsData } from '../../../types/index';

class Sources {
    draw(data: NewsData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: NewsData) => {
            if (sourceItemTemp instanceof HTMLTemplateElement) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
                if (!(sourceItemTemp instanceof DocumentFragment)) {
                    throw new Error();
                }
                const span = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
                span.textContent = item.sourse.name;
                const block_button = sourceClone.querySelector('.source__item') as HTMLDivElement;
                block_button.setAttribute('data-source-id', item.sourse.id);

                fragment.append(sourceClone);
            }
        });
        const div = document.querySelector('.sources') as HTMLDivElement;
        div.append(fragment);
    }
}

export default Sources;
