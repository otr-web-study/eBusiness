<script lang="ts" setup>
const tst = ref<string>("about");
</script>

<template>
  <!-- ======= About Section ======= -->
  <div id="about" class="about-area area-padding vh-100">
    <div class="container pt-5">
      <div class="row mt-5">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h2>About eBusiness</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- single-well start-->
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="well-left">
            <div class="single-well">
              <a href="#">
                <img src="/images/about.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- single-well end-->
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="well-middle">
            <div class="single-well">
              <a href="#">
                <h4 class="sec-head">project Maintenance</h4>
              </a>
              <p>
                This project is a test task for responding to a vacancy. The
                following technologies were used to implement the project:
              </p>
              <ul>
                <li><i class="bi bi-check"></i> Bootstrap template</li>
                <li><i class="bi bi-check"></i> Typescript</li>
                <li><i class="bi bi-check"></i> Nuxt</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End col-->
      </div>
    </div>
  </div>
  <!-- End About Section -->
</template>
