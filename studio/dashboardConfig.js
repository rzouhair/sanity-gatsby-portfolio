export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61aa91e9b3b8f2298dfec749',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-63p3ip7e',
                  apiId: 'ed82fb35-a90b-4f09-b17a-eae7489dae5f'
                },
                {
                  buildHookId: '61aa91e975da7b2e7ac8a56c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-28drmt2x',
                  apiId: '8694faf1-98d9-4904-9b6a-e204c8c42a3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rzouhair/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-28drmt2x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
