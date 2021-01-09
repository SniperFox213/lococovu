<script>
  // Importing components
  import {
    H1, H2, H3, H4, H5, H6,
    Paragraph,
    Caption
  } from "../../components/typography";

  import SyntaxHighlighter from "../../components/other/SyntaxHighlighter.svelte";
</script>

<!-- Texts -->
<H2 dark>Типография</H2>
<Paragraph dark>Типография - это один из самых главных компонентов любого веб-приложения. А главных компонентов там много, так что да. Типография отвечает за размер различных шрифтов, за то, как они будут выглядеть и какие вообще можно использовать размеры, цвета и подобное.<br /><br />Типография на Лококову максимально проста и банальна. Максимум два шрифта, 6 размеров для различных заголовков (постоянно используются максимум 3 размера), один размер под параграф (обычный текст) и пару размеров для сверх-маленького цвета. И всё это только в двух цветах - белый и чёрный. Шрифты и размеры текстов, с их двумя цветами, представленны ниже.</Paragraph>

<!-- Fonts -->
<div class="mt-16 mb-6 w-full">
  <!-- Text -->
  <H3 dark>Шрифты</H3>

  <!-- Fonts (black) -->
  <div class="flex my-4">
    <div class="w-1/2 mr-4 text-center flex flex-col items-center justify-center bg-gray-100 shadow-md rounded-md px-4 py-6 relative">
      <!-- Text -->
      <H3 classes="font-primary" dark>Хитрая лиса...</H3>
      <H5 classes="font-primary" dark>пробралась в твой дом</H5>

      <!-- Badge -->
      <div class="absolute m-2 top-0 right-0 rounded-md bg-input shadow-md flex items-center justify-center px-2.5 py-1">
        <Caption size="xs" opacity={false}><span class="border-b border-dotted border-gray-100">Montserrat</span>, белый</Caption>
      </div>
    </div>

    <div class="w-1/2 bg-gray-100 flex flex-col justify-center items-center shadow-md rounded-md px-4 py-6">
      <!-- Icon -->
      <img class="w-1/6" src="./icons/old_shrugging_guy.png" alt="">

      <!-- Text -->
      <Paragraph classes="mt-1 text-center" dark>Больше шрифтов нету. Пока что довольствуемся только одним.</Paragraph>
    </div>
  </div>
</div>

<!-- Typography -->
<H3 dark>Компоненты</H3>

<div class="w-full flex relative my-6">
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