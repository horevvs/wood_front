
<template>
  <div class="not-found">
    <div class="container">
      <h1 class="error-code">404</h1>
      <h2 class="error-message">Страница не найдена</h2>
      <p class="description">
        Извините, но запрашиваемая вами страница не существует. 
        Пожалуйста, проверьте URL или вернитесь на главную страницу.
      </p>
      <router-link to="/" class="home-button">На главную</router-link>
    </div>
  </div>
</template>

<script setup>
// Здесь можно добавить любые необходимые скрипты
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Светлый фон */
}

.container {
  text-align: center;
}

.error-code {
  font-size: 6rem;
  color:#f59e0b; /* Красный цвет для кода ошибки */
}

.error-message {
  font-size: 2rem;
  color: #343a40; /* Темный цвет для сообщения */
}

.description {
  font-size: 1.2rem;
  color: #6c757d; /* Серый цвет для описания */
}

.home-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #a87a2a; /* Синий цвет для кнопки */
  border-radius: 5px;
  text-decoration: none; /* Убираем подчеркивание */
}

.home-button:hover {
  background-color: #f59e0b; /* Темнее при наведении */
}
</style>