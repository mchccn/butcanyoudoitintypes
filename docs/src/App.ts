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
        return html`<div class="app max-w-2xl mx-auto">
            <div class="challenges-container px-3 py-4 flex flex-col gap-3">
                ${until(
                    this.challenges.then((challenges) =>
                        challenges.map(
                            (challenge) =>
                                html`<challenge-card
                                    challengeId=${challenge.id}
                                    name=${challenge.name}
                                    difficulty=${challenge.difficulty}
                                    description=${challenge.description}
                                ></challenge-card>`
                        )
                    ),
                    html`<p>Loading...</p>`
                )}
            </div>
        </div>`;
    }

    createRenderRoot() {
        return this;
    }
}
