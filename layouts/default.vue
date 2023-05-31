<template>
  <header
    id="header"
    class="header-scrolled fixed-top d-flex align-items-center"
  >
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1>
          <NuxtLink to="/"><span>e</span>Business</NuxtLink>
        </h1>
      </div>

      <nav class="navbar">
        <ul>
          <li>
            <NuxtLink
              class="nav-link scrollto"
              activeClass="active-nav-link"
              to="/"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="nav-link scrollto"
              activeClass="active-nav-link"
              to="/about"
              >About</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->

  <slot />
</template>
