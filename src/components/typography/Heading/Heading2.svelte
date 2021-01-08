<script>
  // Importing template component
  import Template from "./_template.svelte";

  export let white;
  export let dark;
</script>

<Template white={white} dark={dark} size="2" classes="text-5xl font-bold"><slot></slot></Template>