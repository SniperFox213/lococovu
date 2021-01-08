<script>
  // Importing template component
  import Template from "./_template.svelte";

  export let white;
  export let dark;
</script>

<Template white={white} dark={dark} size="3" classes="text-4xl font-medium"><slot></slot></Template>