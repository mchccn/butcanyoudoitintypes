/** @format */

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { until } from "lit/directives/until.js";
import { Challenge, getData } from "./data";

const sorters = {
    id: (a: Challenge, b: Challenge) => a.id - b.id,
    difficulty: (a: Challenge, b: Challenge) => (a.difficulty === b.difficulty ? a.id - b.id : a.difficulty - b.difficulty),
    name: (a: Challenge, b: Challenge) => (a.name > b.name ? 1 : -1),
} as const;

@customElement("main-app")
export class App extends LitElement {
    static styles = css``;

    @state()
    private challenges = getData();

    @state()
    private descending = false;

    @state()
    private sortBy = "id" as keyof typeof sorters;

    @state()
    private filterTag = ".*";

    @state()
    private sorter = sorters[this.sortBy];

    private tagSelect: Ref<HTMLSelectElement> = createRef();

    public lookAtTag(tag: string) {
        this.filterTag = tag;

        this.requestUpdate();
    }

    private changeTag(event: MouseEvent) {
        this.filterTag = (event.target as HTMLSelectElement).value;

        this.requestUpdate();
    }

    private changeSorter(event: MouseEvent) {
        this.sortBy = (event.target as HTMLSelectElement).value as keyof typeof sorters;

        this.sorter = sorters[this.sortBy];

        this.requestUpdate();
    }

    private toggleDescending() {
        this.descending = !this.descending;

        this.requestUpdate();
    }

    render() {
        return html`<div class="app md:gap-4 md:py-6 md:max-w-2xl flex flex-col gap-2 px-4 py-4 max-w-xl mx-auto">
            <h1 class="md:text-4xl sm:text-3xl font-bold text-center text-2xl">But can you do it in types?</h1>
            <p class="md:text-base md:text-gray-600 text-gray-700 text-center text-sm">
                Everyone knows you can write code to do things, but can you write the same thing using only types? This page provides some challenges for you to
                complete in solely the type system. Each challenge has a description and difficulty of how hard it is. Find a challenge below to get started,
                good luck!
            </p>
            <div class="flex items-center gap-2">
                <label class="flex items-center gap-2">
                    <span class="md:text-base text-sm block select-none">Order by</span>
                    <select @change=${this.changeSorter} .value=${this.sortBy} class="md:text-sm text-xs px-1 py-1 rounded-sm block border border-gray-200">
                        <option value="id">challenge id</option>
                        <option value="difficulty">challenge difficulty</option>
                        <option value="name">challenge name</option>
                    </select>
                </label>
                <label class="flex items-center gap-2">
                    <span class="block md:text-base text-sm w-20 select-none">${this.descending ? "descending" : "ascending"}</span>
                    <input type="checkbox" @change=${this.toggleDescending} .checked=${this.descending} />
                </label>
                <label class="sm:flex items-center gap-2 hidden">
                    <span class="block md:text-base text-sm select-none">with ${this.filterTag === ".*" ? "any" : "tag"}</span>
                    <select
                        ${ref(this.tagSelect)}
                        @change=${this.changeTag}
                        .value=${this.filterTag}
                        class="md:text-sm text-xs px-1 py-1 rounded-sm block border border-gray-200"
                    >
                        ${until(
                            this.challenges.then(
                                (challenges) => (
                                    // whatever the fuck this hack is, lit.dev better fix this...
                                    setTimeout(() => (this.tagSelect.value!.value = this.filterTag), 0),
                                    [
                                        html`<option value=".*">${this.filterTag === ".*" ? "tag" : "any tag"}</option>`,
                                        ...[...new Set(challenges.flatMap(({ tags }) => tags))]
                                            .sort()
                                            .map((tag) => html`<option value="${tag}">${tag}</option>`),
                                    ]
                                )
                            ),
                            ""
                        )}
                    </select>
                </label>
            </div>
            <div class="challenges-container md:gap-4 py-2 flex flex-col gap-3">
                ${until(
                    this.challenges.then((challenges) =>
                        [...challenges]
                            .filter((challenge) => challenge.tags.some((tag) => new RegExp(`^${this.filterTag}$`).test(tag)))
                            .sort((a, b) => (this.descending ? this.sorter(b, a) : this.sorter(a, b)))
                            .map(
                                (challenge) =>
                                    html`<challenge-card
                                        challengeId=${challenge.id}
                                        name=${challenge.name}
                                        difficulty=${challenge.difficulty}
                                        description=${challenge.description}
                                        .tags=${challenge.tags}
                                        .app=${this as App}
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
