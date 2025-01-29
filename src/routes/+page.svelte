<script lang="ts">
    import Ui from "$lib/component/UI.svelte";
    import { stage } from "$lib/store";

    const stages = ["mode", "cpu", "game"]

    const gameTypes: {
        id: 0 | 1,
        title: string,
    }[] = [
        {
            id: 0,
            title: "no level",
        },
        {
            id: 1,
            title: "level",
        }
    ]
    let gameType: null | (0 | 1) = null

    const cpus: {
        id: 0 | 1 | 2 | 3,
        title: string,
    }[] = [
        {
            id: 0,
            title: "no cpu"
        },
        {
            id: 1,
            title: "weak"
        },
        {
            id: 2,
            title: "nomal"
        },
        {
            id: 3,
            title: "hard"
        }
    ]
    let cpu: null | (0 | 1 | 2 | 3) = null
</script>

<div class="w-full h-full flex">
    {#if $stage === "mode"}
        <div class="w-full h-full flex flex-col gap-4 justify-center items-center">
            {#each gameTypes as type}
                <button
                    onclick={() => {
                        gameType = type.id
                        stage.set(stages[1] as "mode" | "cpu" | "game")
                    }}
                    class="w-[150px] h-[50px] p-4 flex justify-center items-center rounded-md bg-slate-400 text-slate-800"
                >
                    {type.title}
                </button>
            {/each}
        </div>
    {:else if $stage === "cpu"}
        <div class="w-full h-full flex flex-col gap-4 justify-center items-center">
            {#each cpus as type}
                <button
                    onclick={() => {
                        cpu = type.id
                        stage.set(stages[2] as "mode" | "cpu" | "game")
                    }}
                    class="w-[150px] h-[50px] p-4 flex justify-center items-center rounded-md bg-slate-400 text-slate-800"
                >
                    {type.title}
                </button>
            {/each}
        </div>
    {:else}
        <Ui {gameType} {cpu} />
    {/if}
</div>