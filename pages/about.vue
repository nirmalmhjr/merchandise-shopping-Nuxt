<template>

    <div>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum consectetur dicta natus, asperiores obcaecati fuga animi debitis pariatur inventore.</p>
      <p>{{ data }}</p>
    </div>
  </template>
  
  <script setup>
   
    const { data } = await useFetch('/api/ninja')
  
  </script>
  
  <style scoped>
      h1 {
          margin-bottom: 20;
          font-size: 36px;
      }
  
      p{
          margin: 20px 0;
      }
  </style>