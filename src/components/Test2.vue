<template>
<div class=" ">
  <section class="main-container">
    <div class="container">
      <div class="row">
        <div class="main col-lg-8">
          <h1 class="page-title">Tabs and Pills</h1>
          <div class="separator-2"></div>
          <br>
          <h2 class="mt-4">Horizontal Tabs - Style 1</h2>
          <br>
          <ul class="nav nav-tabs style-1" >
            <li class="nav-item" v-for='item in items' :key='item.id' v-show='item.usable'>
              <a :class="getClassNameForNav(item.id)" href="'#/test2" v-on:click='select(item.id)'>
                <i :class='item.icon'></i>{{ item.title }}
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" v-for='item in items' :key="'htab' + item.id" v-show='item.usable && item.id === selected'>
              <h3 class="mt-4">{{ item.title }}</h3>
              <div class="row">
                <div class="col-md-6" v-show='isDescFirst(item.id)'>
                  <p v-for='(param, index) in splitParams(item.description)' :key='index'>{{ param }}</p>
                </div>
                <div class="col-md-6">
                  <ul class="list-icons">
                    <div v-for='child in item.children' :key='child.id'>
                      <li><i class="fa fa-check pr-2"></i> {{ child.text }}</li>
                    </div>
                  </ul>
                </div>
                <div class="col-md-6" v-show='!isDescFirst(item.id)'>
                  <p v-for='(row, index) in splitParams(item.description)' :key='index'>{{ row }}</p>
                </div>
              </div>
              <a :href="item.page" class="btn margin-clear btn-default">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import jsonData from './data.json'
export default {
  name: 'Test2',

  data () {
    return {
      selected: 1,
      items: []
    }
  },

  methods: {
    select: function (id) {
      this.selected = id
    },

    sortChildren: function (children) {
      return children.sort((childA, childB) => {
        let comparison = 0
        if (childA.orderNo > childB.orderNo) {
          comparison = 1
        } else if (childA.orderNo < childB.orderNo) {
          comparison = -1
        }
        return comparison
      })
    },

    isDescFirst: function (id) {
      return id % 2 !== 0
    },

    getClassNameForNav: function (id) {
      return 'nav-link ' + (id === this.selected ? 'active' : '')
    },

    splitParams: function (content) {
      var rows = content.split('!')
      return rows.splice(0, rows.length - 1).map(row => row + '!')
    }
  },

  created: function () {
    const data = jsonData.items
    data.forEach(item => {
      item = this.sortChildren(item.children)
    })
    this.items = data
    this.items[0].icon = 'fa fa-home pr-2'
    this.items[1].icon = 'fa fa-user pr-2'
    this.items[2].icon = 'fa fa-envelope pr-2'
  }
}
</script>

<style scoped>

</style>
