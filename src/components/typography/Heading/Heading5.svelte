<script>
  // Importing template component
  import Template from "./_template.svelte";

  export let white;
  export let dark;
</script>

<Template white={white} dark={dark} size="5" classes="text-2xl"><slot></slot></Template>