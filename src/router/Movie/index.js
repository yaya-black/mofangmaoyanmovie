export default{
    path:'/Movie',
    component : () => import('@/views/Movie'),
    children:[
        {
        path:'ComingSoon',
        component:()=>import('@/components/ComingSoon')
    },
    {
        path:'NowPlaying',
        component:()=>import('@/components/NowPlaying')
    },
    {
        path:'Search',
        component:()=>import('@/components/Search')
    },
    {
        path:'City',
        component:()=>import('@/components/City')
    },
    {
        path:"/Movie",
        redirect:'/Movie/NowPlaying'
    }
]
}