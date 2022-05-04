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

    render() {
        return html`<div class="challenge-card">
            <p class="challenge-id">${this.challengeId}</p>
            <h1 class="challenge-name">${this.name}</h1>
        </div>`;
    }
}
