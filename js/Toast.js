export class Toast {
    constructor (toastID, title, content) {
        let item = Object.assign(document.createElement("div"), {
            classList: "toast-item created"
        });
        item.setAttribute("data-roki-toast", toastID);

        item.addEventListener("animationend", (event) => {
            if (event.animationName == "toast-created") {item.classList.remove("created"); return false;} 
            item.parentElement.removeChild(item);
        });

        // Header
        let item_header = this.createHeader(toastID, title);

        // Body
        let item_body = this.createBody(content);

        // Append
        item.appendChild(item_header);
        item.appendChild(item_body);
        return item;
    }

    // Header
    createHeader(toastID, toastTitle) {
        // Add Title element
        let title = Object.assign(document.createElement("div"), {
            classList: "toast-title",
            innerText: toastTitle
        });
        // Add Close Button
        let close_button = Object.assign(document.createElement("i"), {
            classList: "fa-solid fa-xmark"
        });
        close_button.setAttribute("data-roki-toast-target", toastID);
        close_button.addEventListener("click", () => {
            let toastParent = document.querySelector("[data-roki-toast='"+toastID+"']");
            toastParent.classList.add("closed");
        });

        // Add spans
        let spans = [this.createSpan(), this.createSpan()];
        spans[0].appendChild(title); spans[1].appendChild(close_button);

        let container = Object.assign(document.createElement("div"), {
            classList: "toast-header"
        });
        spans.forEach((element) => {
            container.appendChild(element);
        });

        return container;
    }

    createSpan() {
        let span = document.createElement("span");
        return span;
    }

    // Body
    createBody(text) {
        // Add content
        let content = Object.assign(document.createElement("p"), {
            classList: "toast-content",
            innerText: text
        });

        let container = Object.assign(document.createElement("div"), {
            classList: "toast-body"
        });

        container.appendChild(content);
        return container;
    }
}