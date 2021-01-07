<script>
  // Importing different header
  // types

  // @type Landing
  import LandingHeader from "./types/Landing.header.svelte";

  // Exporting variables

  // @export type
  // - Type of header
  // - Default: "landing"
  export let type = "landing";

  // We do not need to
  // export anything else.
</script>

{ #if type == "landing" }
  <LandingHeader />
{ /if }