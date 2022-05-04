/** @format */

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { until } from "lit/directives/until.js";
import { getData } from "./data";

@customElement("main-app")
export class App extends LitElement {
    static styles = css``;

    @state()
    private challenges = getData();

    render() {
        return html`${until(
            this.challenges.then((challenges) =>
                challenges.map((challenge) => html`<challenge-card challengeId=${challenge.id} name=${challenge.name}></challenge-card>`)
            ),
            html`<p>Loading...</p>`
        )}`;
    }
}
