<script>
  // Importing components
  import Icon from "../../components/Icon.svelte";
  import { H2, H3, Paragraph, Caption } from "../../components/typography";
</script>

<H2 dark>Кнопки</H2>
<Paragraph dark>Кнопки на Лококову не такие уж и вычурные. Есть несколько вариантов кнопок, всего-то три размера, и пару-тройку вариаций цветов (не считая фонов)<br /><br />Анимации кнопок максимально банальны и в представлении не требуются. Все кнопки, текста, которые в них должны использоваться (и каких размеров, цветов), представленны ниже.</Paragraph>

<div class="mt-16 mb-6 w-full relative">
  <!-- Types -->
  <H3 dark>Типы</H3>

  <!-- List -->
  <div class="w-full flex items-stretch my-6 relative">
    <!-- Normal -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-4 h-8 rounded-md bg-icon-button">
        <Caption opacity={false}>Кнопка</Caption>
      </button>
      
      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Обычная</Caption>
      </div>
    </div>

    <!-- Icon-Button -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center">
        <Icon name="settings" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Кнопка-иконка</Caption>
      </div>
    </div>

    <!-- Button With Icon -->
    <div class="relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-4 h-8 rounded-md bg-icon-button flex items-center">
        <Icon name="feather" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
        
        <Caption classes="ml-1" opacity={false}>Кнопка</Caption>
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Кнопка с иконкой</Caption>
      </div>
    </div>
  </div>

  <!-- Size -->
  <H3 dark>Размер</H3>

  <!-- List -->
  <div class="w-full flex items-stretch my-6 relative">
    <!-- Small -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-3 h-6 rounded-md bg-icon-button">
        <Caption size="xs" opacity={false}>Кнопка</Caption>
      </button>
      
      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Маленькая</Caption>
      </div>
    </div>

    <!-- Base -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-4 h-8 rounded-md bg-icon-button">
        <Caption opacity={false}>Кнопка</Caption>
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Нормальная</Caption>
      </div>
    </div>

    <!-- Gradient -->
    <div class="relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-6 h-10 rounded-md bg-icon-button">
        <Caption opacity={false} size="md">Кнопка</Caption>
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Средняя</Caption>
      </div>
    </div>
  </div>

  <!-- Colors -->
  <H3 dark>Цвета</H3>

  <!-- List -->
  <div class="w-full flex items-stretch my-6 relative">
    <!-- Dark -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-4 h-8 rounded-md bg-input">
        <Caption opacity={false}>Кнопка</Caption>
      </button>
      
      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Тёмная</Caption>
      </div>
    </div>

    <!-- Light -->
    <div class="mr-4 relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button class="px-4 h-8 rounded-md bg-icon-button">
        <Caption opacity={false}>Кнопка</Caption>
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Светлая</Caption>
      </div>
    </div>

    <!-- Gradient -->
    <div class="relative flex items-center justify-center w-1/3 px-4 py-6 rounded-md bg-gray-100 shadow-md">
      <button style="background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="px-4 h-8 rounded-md bg-icon-button">
        <Caption opacity={false}>Кнопка</Caption>
      </button>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption classes="border-b border-dotted border-gray-100" size="xs" opacity={false}>Градиенты</Caption>
      </div>
    </div>
  </div>
</div>