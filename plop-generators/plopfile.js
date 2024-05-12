export default function (plop) {
  plop.setGenerator('basics', {
    description: "fill this in later ",
    actions[{
      type: 'add folder',
      path: 'src/',
    },
    {
      type: 'add folder', 
      path: '/src/server/'
    },
    {
      type: 'add', 
      path: ['']
    }
    {
    type: 'add folder',
    path: '/src/views/'
    },
    {
      type: 'add index',
      path: '/src/views/index.ejs'
    }
    {
      type: 'add folder', 
      path: '/src/views/partials/'
    },
    {
      type: 'add folder', 
      path: '/src/views/scripts/'
    }
    {
      type: 'add folder',
      path: '/src/api/'
    },
    {
      type: 'add folder',
      path: '/static/js/'
    },
    {
      type: 'add folder', 
      path: '/static/styles/'
    },
    {
      type: 'add folder',
      path: '/static/assets/'
    },
    {
      type: 'add folder',
      path: '/static/meta/'
    }, 
    {
      type: 'add robots',
      path: '/static/meta/robots.txt'
    }
    ]}
  })
}