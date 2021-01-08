<script>
  // Importing modules
  import { afterUpdate } from "svelte";

  // Exporting variables

  // @export color
  export let white = false;
  export let dark = false;

  // @export classes
  // - Custom classes
  export let classes;

  // Listening to variables
  // change
  afterUpdate(() => {
    // Defining default caption color
    if (!white && !dark) {
      white = true;
    };
  })
</script>

<p class="text-base text-gray-{ white ? "100" : "900" } opacity-90 { classes }">
  <slot></slot>
</p>