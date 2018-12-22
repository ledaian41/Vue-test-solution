<template>
  <div>
    <section class="main-container">
        <div class="container">
          <div class="row">
            <div class="main col-lg-8">
              <h1 class="page-title">Tabs and Pills</h1>
              <div class="separator-2"></div>
              <br>
              <h2 class="mt-4">Horizontal Tabs - Style 1</h2>
              <br>
              <ul class="nav nav-tabs style-1">
                <li class="nav-item">
                  <a :class="getClassNameForNav(1)" href="#htab1" v-on:click='select(1)'><i class="fa fa-home pr-2"></i>Very Flexible</a>
                  </li>
                <li class="nav-item">
                  <a :class="getClassNameForNav(2)" href="#htab2" v-on:click='select(2)'><i class="fa fa-user pr-2"></i>Unt lorem culpa quilor</a>
                  </li>
                <li class="nav-item">
                  <a :class="getClassNameForNav(3)" href="#htab3" v-on:click='select(3)'><i class="fa fa-envelope pr-2"></i>Well Documented</a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane fade show active" id="htab1" v-show='1 === selected'>
                  <h3 class="mt-4">Very Flexible</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
                      <p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-icons">
                        <li><i class="fa fa-check pr-2"></i> Lorem ipsum dolor sit amet maiores</li>
                        <li><i class="fa fa-check pr-2"></i> Consectetur adipisicing elit</li>
                        <li><i class="fa fa-check pr-2"></i> Aut earum numquam hic placeat</li>
                        <li><i class="fa fa-check pr-2"></i> Fugiat rem consequatur neque</li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" class="btn margin-clear btn-default">Read more</a>
                </div>
                <div class="tab-pane fade show active" id="htab2" v-show='2 === selected'>
                  <h3 class="mt-4">Unt lorem culpa quilor</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-icons">
                        <li><i class="fa fa-check pr-2"></i> Lorem ipsum dolor sit amet maiores</li>
                        <li><i class="fa fa-check pr-2"></i> Consectetur adipisicing elit</li>
                        <li><i class="fa fa-check pr-2"></i> Aut earum numquam hic placeat</li>
                        <li><i class="fa fa-check pr-2"></i> Fugiat rem consequatur neque</li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
                      <p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
                    </div>
                  </div>
                  <a href="#" class="btn margin-clear btn-default">Read more</a>
                </div>
                <div class="tab-pane fade show active" id="htab3" v-show='3 === selected'>
                  <h3 class="mt-4">Well Documented</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
                      <p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-icons">
                        <li><i class="fa fa-check pr-2"></i> Lorem ipsum dolor sit amet maiores</li>
                        <li><i class="fa fa-check pr-2"></i> Consectetur adipisicing elit</li>
                        <li><i class="fa fa-check pr-2"></i> Aut earum numquam hic placeat</li>
                        <li><i class="fa fa-check pr-2"></i> Fugiat rem consequatur neque</li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" class="btn margin-clear btn-default">Read more</a>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Test1',

  data () {
    return {
      selected: 1
    }
  },

  methods: {
    select: function (id) {
      this.selected = id
    },

    getClassNameForNav: function (id) {
      return 'nav-link ' + (id === this.selected ? 'active' : '')
    }
  }
}
</script>

<style scoped>

</style>
