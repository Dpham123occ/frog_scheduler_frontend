<template>
  <div class="header">
    <h1>Super Frog Scheduler</h1>
  </div>
  <div class="intro">
    <p>Add TCU Spirit to your event! <br> Request Super Frog, TCU Cheerleaders, and showgirls to your wedding, grad party, and more! </p>
  </div>
  <div class="body">
    <nav class="nav-bar">
      <div class="nav-item">
        <RouterLink to="/pricing">
          <span>Pricing</span>
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/range">
          <span>Range</span>
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/request">
          <span>Request</span>
        </RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink to="/modify">
          <span>Modify a request</span>
        </RouterLink>
      </div>
    </nav>
    <router-view></router-view>
  </div>
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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  color: white;
}

.intro {
  border-top: 50px solid transparent; /* Top border */
  border-left: 50px solid transparent; /* Left border */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  color: white;
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

.nav-bar {
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 2rem;
  padding: 0.5rem;
  margin-top: 2rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.nav-item a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav-item a:hover {
  color: #666;
}

.nav-item img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.nav-item span {
  font-size: 1rem;
}
</style>