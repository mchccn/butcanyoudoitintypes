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
            <p>${this.challengeId}</p>
        </div>`;
    }
}
