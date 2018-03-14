import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import SongsIndex from '@/components/Songs/SongsIndex'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong/ViewSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsIndex
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
