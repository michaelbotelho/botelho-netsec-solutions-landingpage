<script>
    import { onMount } from 'svelte';

    let initialSelection = '';
    let furtherSelection = '';

    // Options for further selection based on initial selection
    let options = {
        option1: ['Sub-option 1.1', 'Sub-option 1.2', 'Sub-option 1.3'],
        option2: ['Sub-option 2.1', 'Sub-option 2.2', 'Sub-option 2.3'],
        option3: ['Sub-option 3.1', 'Sub-option 3.2', 'Sub-option 3.3']
    };

    // Update further selection options based on initial selection
    $: furtherOptions = options[initialSelection] || [];
</script>
<style>
    select:invalid {
        color: #9ca3af; /* Tailwind's text-gray-400 color for placeholder */
    }
    option {
        color: #000; /* Default text color for options */
    }
</style>

<div class="flex flex-row flex-1 mx-auto w-1.5 md:w-1/2 p-6 border-2 bg-slate-100 rounded-lg"> <!-- Contact Card Container -->
    <form class="flex flex-col gap-4 w-full" action="https://formspree.io/f/xnqoqzqk" method="POST">
        <label for="email">Email address*</label>
        <input type="email" id="email" name="email" placeholder="name@company-email.com" required class="p-2 border rounded border-gray-500 focus:border-purple-800">
        <label for="fname">First Name*</label>
        <input type="text" id="fname" name="fname" required class="p-2 border rounded border-gray-500 focus:border-purple-800">
        <label for="lname">Last Name*</label>
        <input type="text" id="lname" name="lname" required class="p-2 border rounded border-gray-500 focus:border-purple-800">
        
        <label for="initialSelection">Select an option*</label>
        <select id="initialSelection" name="initialSelection" bind:value={initialSelection} required class="p-2 border rounded border-gray-500 focus:border-purple-800" class:placeholder={!initialSelection}>
            <option value="" disabled selected hidden>Option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        {#if initialSelection}
            <label for="furtherSelection">Further selection*</label>
            <select id="furtherSelection" name="furtherSelection" bind:value={furtherSelection} required class:placeholder={!furtherSelection}>
                <option value="" disabled selected hidden>Select an option</option>
                {#each furtherOptions as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>
        {/if}

        <button class="specialBtn w-1/2 mx-auto" type="submit">Send</button>
    </form>
</div>