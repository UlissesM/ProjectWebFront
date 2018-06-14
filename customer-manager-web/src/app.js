import 'angular-material/angular-material.css'
import 'font-awesome/css/font-awesome.css'
import './style.css'
import angular from 'angular'
import angularMaterial from 'angular-material'

console.info(angularMaterial)

import searchCustomerModule from './components/search-customer/search-customer.module'
import registerCustomerModule from './components/register-customer/register-customer.module'
import loginuserModule from './components/login-user/login-user.module'
import menuModule from './components/project-menu/menu.module'
import dashboardModule from './components/dashboard-project/dashboard.module'
import playlistModule from './components/playlist-deezer/playlist-deezer.module'
import playlistUser from './components/playlists-user/playlist-user.module'
export default angular.module('app', [
  searchCustomerModule,
  registerCustomerModule,
  loginuserModule,
  angularMaterial,
  menuModule,
  dashboardModule,
  playlistModule,
  playlistUser
])
