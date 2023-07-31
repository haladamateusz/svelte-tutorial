<script lang="ts">
    import { tick } from "svelte";

    let text = `Select some text and hit the tab key to toggle uppercase`;
    async function handleKeydown(event: KeyboardEvent) {
        if (event.key !== 'Tab') return;

        event.preventDefault();

        const { selectionStart, selectionEnd, value } = event.target as HTMLTextAreaElement;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection)
            ? selection.toUpperCase()
            : selection.toLowerCase();

        text =
            value.slice(0, selectionStart) +
            replacement +
            value.slice(selectionEnd);

        await tick();
        console.log(selectionStart,selectionEnd);
        // this has no effect, because the DOM hasn't updated yet
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<textarea
        value={text}
        on:keydown={handleKeydown}
/>

<style>
    textarea {
        width: 100%;
        height: 100%;
        resize: none;
    }
</style>
