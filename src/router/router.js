import login from '../pages/login.vue'
import index from '../pages/index.vue'
import NotFoundView from '../pages/404.vue'
import article_stick from '../components/article_stick.vue'
import edit from '../components/edit.vue'




const routes = [{
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        component: index,
        children: [{
                path: '/stick',
                component: article_stick
            },
            {
                path: '/edit/:id',
                name: 'edit',
                component: edit,
                props: true
            }
        ]
    },
    { path: '*', component: NotFoundView }
]

export default routes