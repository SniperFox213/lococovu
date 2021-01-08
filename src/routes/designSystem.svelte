<script>
  // Importing components
  import Icon from "../components/Icon.svelte";
</script>

<main class="w-full flex flex-wrap px-6 py-8 bg-container">

  <!-- Button section -->
  <div class="w-1/3 px-6">
    <h1 class="text-xl text-white opacity-90">Обычные Кнопки</h1>
    <p class="text-xs text-gray-100 opacity-75">Конфигурация кнопок обычного вида + все их состояния <span class="border-b border-gray-100 border-dotted">(none, active, hover)</span></p>
  
    <!-- List -->
    <div class="w-full flex flex-col mt-4">

      <!-- By size -->
      <div class="mb-6 w-full">
        <h2 class="text-md text-white mb-2 border-b border-solid border-indigo-400 pb-1">По размеру</h2>

        <!-- Default -->
        <div class="flex items-stretch">
          <div class="mr-4">
            <h1 class="text-sm text-gray-100 mb-1">Маленькая</h1>
            <!-- <Button primary small>
              Кнопка
            </Button> -->
          </div>

          <div class="mr-2">
            <h1 class="text-sm text-gray-100 mb-1">Обычная</h1>
            <!-- <Button primary normal>
              Кнопка
            </Button> -->
          </div>

          <div class="mr-2">
            <h1 class="text-sm text-gray-100 mb-1">Большая</h1>
            <!-- <Button primary medium>
              Кнопка
            </Button> -->
          </div>
        </div>
      </div>

      <!-- By Color -->
      <div class="mb-6 w-full">
        <h2 class="text-md text-white mb-2 border-b border-solid border-indigo-400 pb-1">Цвета</h2>

        <!-- Default -->
        <div class="flex items-stretch">
          <div class="mr-2">
            <h1 class="text-sm text-gray-100 mb-1">Обычная</h1>
            <!-- <Button primary normal>
              Кнопка
            </Button> -->
          </div>

          <!-- Lighter -->
          <div class="mx-2">
            <h1 class="text-sm text-gray-100 mb-1">Светлее</h1>
            <!-- <Button light normal>
              Кнопка
            </Button> -->
          </div>

          <!-- Hz -->
          <div class="mx-2">
            <h1 class="text-sm text-gray-100 mb-1">Градиент</h1>
            <button style="background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);" class="px-4 py-2 rounded-md bg-icon-button flex justify-center items-center text-white text-sm">
              Кнопка
            </button>
          </div>

          <div class="mx-2">
            <h1 class="text-sm text-gray-100 mb-1">Градиент</h1>
            <button style="background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);" class="px-4 py-2 rounded-md bg-icon-button flex justify-center items-center text-white text-sm">
              Кнопка
            </button>
          </div>
        </div>
      </div>

        <!-- With icons -->
        <div class="mb-6 w-full">
          <h2 class="text-md text-white mb-2 border-b border-solid border-indigo-400 pb-1">С иконками</h2>
  
          <!-- Default -->
          <div class="flex items-stretch">
            <div class="mr-4">
              <h1 class="text-sm text-gray-100 mb-1">Маленькая</h1>
              <button class="px-3 py-1 rounded-md bg-input flex justify-center items-center text-white text-sm">
                <Icon name="x" attrs={{ width: "0.85rem", height: "0.85rem", color: "#fff" }} />
                
                <p class="ml-1">Кнопка</p>
              </button>
            </div>
  
            <div class="mr-2">
              <h1 class="text-sm text-gray-100 mb-1">Обычная</h1>
              <button class="px-4 py-2 rounded-md bg-input flex justify-center items-center text-white text-sm">
                <Icon name="x" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
                
                <p class="ml-1">Кнопка</p>
              </button>
            </div>
  
            <div class="mr-2">
              <h1 class="text-sm text-gray-100 mb-1">Большая</h1>
              <button class="px-6 py-3 rounded-md bg-input flex justify-center items-center text-white text-md">
                <Icon name="x" attrs={{ width: "1.25rem", height: "1.25rem", color: "#fff" }} />
                
                <p class="ml-1">Кнопка</p>
              </button>
            </div>
          </div>
        </div>
      
    </div>
  </div>

  <div class="w-1/3 px-6">
    <h1 class="text-xl text-white opacity-90">Типография</h1>
    <p class="text-xs text-gray-100 opacity-75">Шляпки всякого размера</p>
  
    <!-- List -->
    <div class="w-full flex flex-col mt-4">
      <!-- Heading h1 -->
      <h1 class="text-6xl text-white font-bold">heading h1</h1>
      <!-- Heading h2 -->
      <h2 class="text-5xl text-white font-bold my-2">heading h2</h2>
      <!-- Heading h3 -->
      <h3 class="text-4xl text-white font-medium my-2">heading h3</h3>
      <!-- Heading h4 -->
      <h4 class="text-3xl text-white font-medium my-2">heading h4</h4>
      <!-- Heading h5 -->
      <h5 class="text-2xl text-white my-2">heading h5</h5>
      <!-- Heading h6 -->
      <h6 class="text-xl text-white my-2">heading h6</h6>

      <!-- Parapgraph -->
      <p class="text-base text-gray-100 opacity-80 my-1">Paragraph</p>

      <!-- Caption sm -->
      <p class="text-sm text-gray-100 opacity-75 my-1">caption sm</p>

      <!-- Caption xs -->
      <p class="text-xs text-gray-100 opacity-60 my-1">caption xs</p>
    </div>
  </div>

  <div class="w-1/3 px-6">
    <h1 class="text-xl text-white opacity-90">Текстовые поля</h1>
    <p class="text-xs text-gray-100 opacity-75">Поля ввода</p>
  
    <!-- List -->
    <div class="w-full flex flex-col mt-4">
      <div class="mb-6">
        <h2 class="text-md text-white mb-2 border-b border-solid border-indigo-400 pb-1">Иконки</h2>
  
        <div class="flex flex-col items-stretch">
          <div class="w-full my-4">
            <div class="flex w-full bg-input p-2 rounded-md mr-3">
              <!-- Input itself -->
              <input class="text-sm w-auto text-gray-400 bg-input h-8" placeholder="Без иконки" type="text">
            </div>
          </div>

          <div class="w-full">
            <div class="flex w-full bg-input p-2 rounded-md mr-3">
              <!-- Icon -->
              <div class="w-8 h-8 rounded-md bg-icon-button flex justify-center items-center mr-2">
                <Icon name="lock" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
              </div>
          
              <!-- Input itself -->
              <input class="text-sm w-auto text-gray-400 bg-input" placeholder="С иконкой" type="text">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-1/3 px-6 mt-8">
    <h1 class="text-xl text-white opacity-90">Кнопки-иконки</h1>
    <p class="text-xs text-gray-100 opacity-75">Кнопки, в которых есть только иконки. Логично</p>
  
    <!-- List -->
    <div class="w-full flex flex-col mt-4">
      <h2 class="text-md text-white mb-2 border-b border-solid border-indigo-400 pb-1">По размеру</h2>

      <div class="flex items-stretch">
        <button class="w-6 h-6 cursor-pointer rounded-md bg-input flex justify-center items-center">
          <Icon name="chevron-down" attrs={{ width: "0.85rem", height: "0.85rem", color: "#fff" }} />
        </button>

        <button class="w-8 h-8 mx-6 cursor-pointer rounded-md bg-input flex justify-center items-center">
          <Icon name="chevron-down" attrs={{ width: "1rem", height: "1rem", color: "#fff" }} />
        </button>

        <button class="w-12 h-12 cursor-pointer rounded-md bg-input flex justify-center items-center">
          <Icon name="chevron-down" attrs={{ width: "1.25rem", height: "1.25rem", color: "#fff" }} />
        </button>
      </div>
    </div>
  </div>
</main>