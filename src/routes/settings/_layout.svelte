<script>
  // Importing modules
  import SettingsHeader from "../../components/Layout/SettingsHeader.svelte";
</script>

<!-- Main Page's Layout -->
<main>
  <SettingsHeader />

  <section class="h-full flex relative mx-8 pt-24">
    <!-- Settings -->
    <div class="w-full h-full px-2 relative">
      <div class="w-full h-full rounded-md pt-4 bg-input flex flex-col">
        <!-- List Itself -->
        <div class="w-full pb-8">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</main>