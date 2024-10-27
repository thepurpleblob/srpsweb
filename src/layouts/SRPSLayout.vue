<template>
  <q-layout view="hhh lpr fff" class="bg-white">
    <q-header elevated class="srps-brand q-py-md" height-hint="98">
      <q-toolbar class="q-pt-md">
        <q-toolbar-title class="text-center">
            <img src="~assets/SRPSLogo200.png" />
        </q-toolbar-title>
      </q-toolbar>

        <q-tabs align="left">
          <q-route-tab to="/" label="Home" />
        </q-tabs>
    </q-header>

    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>

    <q-footer class="srps-brand">
      <div class="row q-pa-md">
        <div class="col">
          <div class="row justify-start">
            <div class="col-auto q-mr-xs">
              <a href="https://www.facebook.com/p/Scottish-Railway-Preservation-Society-61560563783923/" class="text-white">
                <q-icon name="fa-brands fa-square-facebook" size="lg"></q-icon>
              </a>
            </div>
            <div class="col-auto q-mr-xs">
              <a
                href="https://www.instagram.com/bonesskinneilrailway"
                class="text-white"
              >
                <q-icon name="fa-brands fa-square-instagram" size="lg"></q-icon>
              </a>
            </div>
            <div class="col-auto">
              <a href="https://twitter.com/bonessrailway" class="text-white">
                <q-icon name="fa-brands fa-square-x-twitter" size="lg"></q-icon>
              </a>
            </div>
          </div>

          <div>
            <p class="text-weight-bold q-pt-lg">
              The Scottish Railway Preservation Society
            </p>
            <p>
              Operators of Bo'ness and Kinneil Railway and Museum of Scottish
              Raulways. A Scottish Charity, SC002375, regulated by the Scottish
              Charity Regulator.
            </p>
          </div>
          <div>
            <p>
              <q-icon name="fa-solid fa-square-phone" size="lg"></q-icon>
              01506 825855
            </p>
            <p>
              <q-icon name="fa-solid fa-square-envelope" size="lg"></q-icon>
              enquiries.railway@srps.org.uk
            </p>
          </div>
        </div>

        <div class="col">
          <p class="text-weight-bold">Other SRPS Websites</p>
          <q-list dense padding>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.srpsdiesel.co.uk"
                  >SRPS Diesel Group</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.srpssteam.com/"
                  >SRPS Steam Group</a>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.gotopcs.net/"
                  >SRPS Carriage &amp; Wagon Dept.</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a
                  class="text-white"
                  href="https://www.srpsbirkhillgroup.org.uk/"
                  >SRPS Birkhill Station Development</a
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="sass">
.srps-nav
  align-items: center
.srps-brand
    background: #003149
    color: white
</style>
