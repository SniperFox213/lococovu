<script>
  // Importing template component
  import Template from "./_template.svelte";

  export let white;
  export let dark;
</script>

<Template white={white} dark={dark} size="6" classes="text-xl"><slot></slot></Template>