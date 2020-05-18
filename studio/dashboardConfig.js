export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec2f4a278ebf4025bda7e1e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ki9r1rfe',
                  apiId: '49772b87-6665-4ebe-af3c-d5de3b9ea0d1'
                },
                {
                  buildHookId: '5ec2f4a2c0b1ca6b6f30aab9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-3rcu53v7',
                  apiId: '27035d79-2942-4626-8543-8e54dc473d03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chebyrashka/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-3rcu53v7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
