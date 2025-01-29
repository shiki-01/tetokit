import { writable, type Writable } from "svelte/store";

const stage: Writable<"mode" | "cpu" | "game"> = writable("mode");

export { stage };
