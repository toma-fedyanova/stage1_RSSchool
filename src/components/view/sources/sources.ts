import './sources.css';

interface NewsIdName {
    name: string;
    id: string;
}
class Sources {
    draw(data: NewsIdName[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: NewsIdName) => {
            if (sourceItemTemp instanceof HTMLTemplateElement) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
                const span = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
                span.textContent = item.name;
                const block_button = sourceClone.querySelector('.source__item') as HTMLDivElement;
                block_button.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });
        const div = document.querySelector('.sources') as HTMLDivElement;
        div.append(fragment);
    }
}

export default Sources;
