<!-- 

 -->

<script>

  // Importing different button
  // types
  import DefaultButton from "./types/Default.button.svelte";
  import LinkButton from "./types/Link.button.svelte";

  // Exproting variables
  
  // @export type
  // - String, defining the
  // type of this button.
  // - Default: "default"
  export let type = "default";

  // @export attrs
  // - Object, containing all
  // attributes of this button
  export let attrs = {
    // @attribute size
    size: "sm",

    // @state normal
    // Button's normal state appearance
    // variables.
    normal: {
      // @attribute textColor
      textColor: "",

      // @attribute backgroundColor
      backgroundColor: ""
    },

    // @state hover
    // Button's hover state ...
    hover: {
      // @attribute textColor
      textColor: "",

      // @attribute backgroundColor
      backgroundColor: ""
    },

    // @attribute class
    // Custom classes
    class: ""
  };
</script>

<!-- 
  @type: Default
 -->
{ #if type == "default" }
  <DefaultButton bind:attrs={attrs} on:click>
    <slot></slot>
  </DefaultButton>

<!-- 
  @type: Link 
 -->
{ :else if type == "link" }
  <LinkButton bind:attrs={attrs} on:click>
    <slot></slot>
  </LinkButton>
{ /if }