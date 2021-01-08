<script>
  // Importing components
  import {
    H1, H2, H3, H4, H5, H6,
    Paragraph,
    Caption
  } from "../../components/typography";
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
</style>

<!-- Texts -->
<h3 class="text-4xl text-black font-medium my-2">Типография</h3>
<p class="text-base text-gray-900 opacity-80 my-1">Типография - это один из самых главных компонентов любого веб-приложения. А главных компонентов там много, так что да. Типография отвечает за размер различных шрифтов, за то, как они будут выглядеть и какие вообще можно использовать размеры, цвета и подобное.<br /><br />Типография на Лококову максимально проста и банальна. Максимум два шрифта, 6 размеров для различных заголовков (постоянно используются максимум 3 размера), один размер под параграф (обычный текст) и пару размеров для сверх-маленького цвета. И всё это только в двух цветах - белый и чёрный. Шрифты и размеры текстов, с их двумя цветами, представленны ниже.</p>

<!-- Fonts -->
<div class="my-6 w-full">
  <!-- Text -->
  <h3 class="text-4xl text-black font-medium my-2">Шрифты</h3>

  <!-- Fonts (black) -->
  <div class="flex my-4">
    <div class="w-1/2 mr-4 flex flex-col items-center justify-center bg-gray-100 shadow-md rounded-md px-4 py-6 relative">
      <!-- Text -->
      <h3 style="font-family: 'Montserrat', sans-serif;" class="text-4xl text-black font-bold">Хитрая лиса...</h3>
      <h5 style="font-family: 'Montserrat', sans-serif;" class="text-2xl text-gray-900 text-center">пробралась в твой дом и удалила всю порнушку.</h5>
      
      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-4 py-2">
        <p class="text-xs text-white"><span class="border-b border-dotted border-gray-100">Montserrat</span>, белый</p>
      </div>
    </div>

    <div class="w-1/2 bg-gray-100 flex flex-col justify-center items-center shadow-md rounded-md px-4 py-6">
      <!-- Icon -->
      <img class="w-1/6" src="./icons/old_shrugging_guy.png" alt="">

      <!-- Text -->
      <p class="text-sm text-gray-900 opacity-80 mt-1 text-center">Больше шрифтов нету. Пока что довольствуемся только одним.<br />(Он нам просто идеально подходит)</p>
    </div>
  </div>
</div>

<!-- Typography -->
<h3 class="text-4xl text-black font-medium my-2">Компоненты</h3>

<div class="w-full flex relative mt-6">
  <!-- Light -->
  <div class="w-1/2 mr-4 bg-input rounded-md p-5">
    <!-- List -->
    <div class="w-full flex flex-col mt-4">
      <!-- Heading h1 -->
      <H1>Heading h1</H1>
      <!-- Heading h2 -->
      <H2>Heading h2</H2>
      <!-- Heading h3 -->
      <H3>Heading h3</H3>
      <!-- Heading h4 -->
      <H4>Heading h4</H4>
      <!-- Heading h5 -->
      <H5>Heading h5</H5>
      <!-- Heading h6 -->
      <H6>Heading h6</H6>
  
      <!-- Parapgraph -->
      <Paragraph>Paragraph</Paragraph>
  
      <!-- Caption sm -->
      <Caption>caption sm</Caption>
  
      <!-- Caption xs -->
      <Caption size="xs">caption xs</Caption>
    </div>
  </div>

  <!-- Dark -->
  <div class="w-1/2 bg-gray-100 rounded-md shadow-md p-5">
    <!-- List -->
    <div class="w-full flex flex-col mt-4">
      <!-- Heading h1 -->
      <!-- Heading h1 -->
      <H1 dark>Heading h1</H1>
      <!-- Heading h2 -->
      <H2 dark>Heading h2</H2>
      <!-- Heading h3 -->
      <H3 dark>Heading h3</H3>
      <!-- Heading h4 -->
      <H4 dark>Heading h4</H4>
      <!-- Heading h5 -->
      <H5 dark>Heading h5</H5>
      <!-- Heading h6 -->
      <H6 dark>Heading h6</H6>
  
      <!-- Parapgraph -->
      <Paragraph dark>Paragraph</Paragraph>
  
      <!-- Caption sm -->
      <Caption dark>caption sm</Caption>
  
      <!-- Caption xs -->
      <Caption size="xs" dark>caption xs</Caption>
    </div>
  </div>
</div>