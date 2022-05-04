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

    @property()
    tags: string[];

    render() {
        return html`<div
            class="challenge-card hover:-translate-x-1 hover:-translate-y-1 transition-transform sm:gap-2 flex flex-col gap-1 w-full px-4 py-3 shadow"
        >
            <h1 class="challenge-name sm:text-xl font-mono text-sky-500 hover:underline w-fit">
                <a title="Go to source of ${this.name}" href="https://github.com/kelsny/butcanyoudoitintypes/blob/master/src/${this.name}.ts">${this.name}</a>
            </h1>
            <p class="challenge-description sm:text-sm text-xs text-gray-700">${this.description}</p>
            <p title="This challenge has a rating of ${this.difficulty}" class="challenge-difficulty text-xs text-amber-300">
                ${"★".repeat(this.difficulty).padEnd(6, "☆")}
            </p>
            <div class="sm:flex gap-2 hidden">
                ${this.tags.map(
                    (tag) =>
                        html`<span
                            title="See all challenges with this tag"
                            class="text-xs px-2 py-1 rounded-sm text-gray-700 bg-sky-200 cursor-pointer hover:bg-sky-300 transition"
                            >${tag}</span
                        >`
                )}
            </div>
        </div>`;
    }

    createRenderRoot() {
        return this;
    }
}
