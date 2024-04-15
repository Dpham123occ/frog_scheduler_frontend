<script setup>
</script>
<template>

  <div class="header">
        <h1>Super Frog Scheduler</h1>
        <p>Add TCU Spirit to your event! <br>
            Request Super Frog, TCU Cheerleaders, and showgirls to your wedding, grad party, and more!
        </p>
  </div>

  <div class = "body">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/pricing">Pricing</RouterLink>
      <RouterLink to="/range">Range</RouterLink>
      <RouterLink to="/request">Request</RouterLink>
      <RouterLink to="/modify">Modify a Request</RouterLink>
    </nav>
  </div>
  
  <RouterView></RouterView>
</template>

<style scoped>
#app {
  width: 100vw;
  margin: 0 auto;
  padding: 2rem;
  background-color: blueviolet;
  font-weight: normal;
}
.header {
  border-top: 50px solid transparent; /* Top border */
  border-left: 50px solid transparent; /* Left border */
  line-height: 1.5;
  margin: 0; /* Adjusted margin */
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: xx-large;
}
.logo {
  display: flex;
  justify-content: center;
}
.greeting {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
nav {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  a {
    display: inline-block;
    padding: 0 1rem;
    text-decoration: none;
    color: white;
    transition: 0.4s;
    &:hover {
      background-color: hwb(160 0% 26% / 0.2);
    }
    &:first-of-type {
      border: 0;
    }
  }
}
.router-link-active {
  background-color: orange;
}
</style>