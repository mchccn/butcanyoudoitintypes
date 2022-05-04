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
        return html`<div class="app md:gap-4 md:py-6 md:max-w-2xl flex flex-col gap-2 px-3 py-4 max-w-xl mx-auto">
            <h1 class="md:text-4xl sm:text-3xl font-bold text-center text-2xl">But can you do it in types?</h1>
            <p class="md:text-base md:text-gray-600 text-gray-700 text-center text-sm">
                Everyone knows you can write code to do things, but can you write the same thing using only types? This page provides some challenges for you to
                complete in solely the type system. Each challenge has a description and difficulty of how hard it is. Find a challenge below to get started,
                good luck!
            </p>
            <div class="challenges-container md:gap-4 py-2 flex flex-col gap-3">
                ${until(
                    this.challenges.then((challenges) =>
                        challenges.map(
                            (challenge) =>
                                html`<challenge-card
                                    challengeId=${challenge.id}
                                    name=${challenge.name}
                                    difficulty=${challenge.difficulty}
                                    description=${challenge.description}
                                    .tags=${challenge.tags}
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
