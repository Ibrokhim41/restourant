<template>
  <div>
    <!-- header_about_us -->
    <div class="header_about_us">
      <div class="container">
        <h1>Menu</h1>
      </div>
    </div>

    <!-- ==================== MAIN
    ================================ -->
    <main>
      <!-- main_menu -->
      <foodMenu />

      <!-- main_speciality -->
      <div class="main_speciality">
        <div class="container-fluid p-0">
          <div class="col-12 col-lg-6 offset-lg-6 p-0">
            <div class="main_speciality_text bgcolor_grey">
              <h2>Speciality</h2>
              <h4>EXCELENT SERVICE</h4>
              <p>
                Survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h4>FREE Home DELIVERY</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <h4>Cool atmosphere</h4>
              <p>
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- main_footer -->
      <div class="main_footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <h2>Opening Hours</h2>
            </div>
            <div class="col-12 col-md-5">
              <h5>Monday to Friday <span>10am - 10pm</span></h5>
              <h5>Saturday to Sunday <span>9am - 11pm</span></h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import foodMenu from "@/components/foodMenu";

export default {
  components: { foodMenu }
}
</script>