import { html, LitElement, unsafeCSS, type PropertyValues } from "lit";
import { customElement, property, queryAssignedElements, state } from "lit/decorators.js";
import accordionStyles from "./style.css?inline"
import { map } from "lit/directives/map.js";

interface AccordionItem {
    summary: string;
    details: Node | string;
}

const elementName = "shadcn-accordion"
@customElement(elementName)
export class ShadcnAccordion extends LitElement {
    static _elementCount = 0
    #summaryLabel = "summary" as const

    @state()
    private _items: AccordionItem[] = []

    @property({ type: Boolean })
    multipleOpen: boolean = false

    @queryAssignedElements({ selector: "ul" })
    declare private _listSlots: Array<HTMLUListElement>


    override connectedCallback(): void {
        super.connectedCallback()
        this.addEventListener("click", this.#handleSummaryElementClick)
    }

    #handleSummaryElementClick = (evt: PointerEvent) => {
        const path = evt.composedPath()
        const summary = path.find(target => target instanceof HTMLElement && target.tagName === "SUMMARY") as HTMLElement
        if (summary) {
            summary.children[1]?.classList.toggle("chevron-down")
            summary.children[1]?.classList.toggle("chevron-up")
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        this.removeEventListener("click", this.#handleSummaryElementClick)
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        if (!this.id.length) this.id = `${ShadcnAccordion._elementCount++}`
        this.#initializeAccordionItems()
        console.debug("items initialized", this._items)
    }

    #initializeAccordionItems() {
        if (!this._listSlots || !this._listSlots[0] || !this._listSlots[0].children) {
            console.error("slot undefined!")
            return
        }
        const elementList = this._listSlots[0]
        const itemList: AccordionItem[] = []
        Array.from(elementList.children as HTMLCollectionOf<HTMLElement>).forEach((item, i) => {
            if (item.tagName !== "LI") return;
            let accordionItemContent: AccordionItem
            if (item.dataset[this.#summaryLabel] && item.childNodes[0]) {
                accordionItemContent = { summary: item.dataset[this.#summaryLabel]!, details: item.childNodes[0] }
            }
            else {
                accordionItemContent = { summary: `Item ${i + 1}`, details: "" }
            }
            itemList.push(accordionItemContent)
        })
        if (itemList.length) this._items = itemList
    }

    static styles = [unsafeCSS(accordionStyles)];

    protected render() {
        return html`
            <slot style="display: none;"></slot>
            <div class="accordion-container">
                ${map(this._items, item => {
            return html`
                        <details name="${this.multipleOpen ? "" : this.id}">
                            <summary><p>${item.summary}</p><i class="icon chevron-down"></i></summary>
                            ${item.details instanceof Text ? html`<p>${item.details}</p>` : item.details}
                        </details>
                    `;
        })}
            </div>
        `;
    }
}


declare global {
    interface HTMLElementTagNameMap {
        [elementName]: ShadcnAccordion
    }
}