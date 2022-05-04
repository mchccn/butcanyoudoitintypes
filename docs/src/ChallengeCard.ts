/** @format */

import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("challenge-card")
export class ChallengeCard extends LitElement {
    static styles = css``;

    @property()
    challengeId: number;

    @property()
    name: string;

    @property()
    difficulty: number;

    @property()
    description: string;

    render() {
        return html`<div class="challenge-card w-full px-4 py-3 shadow">
            <h1 class="challenge-name font-mono text-xl text-sky-500">
                <a href="https://github.com/kelsny/butcanyoudoitintypes/blob/master/src/${this.name}.ts">${this.name}</a>
            </h1>
            <p class="challenge-description text-sm text-gray-700">${this.description}</p>
            <p class="challenge-difficulty text-sm text-amber-300">${"★".repeat(this.difficulty).padEnd(6, "☆")}</p>
        </div>`;
    }

    createRenderRoot() {
        return this;
    }
}
