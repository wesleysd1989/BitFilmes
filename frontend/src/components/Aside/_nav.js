export default {
  items: [
    {
      title: true,
      name: 'Categorias',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Lançamentos',
      url: '/dashboard',
    },
    {
      name: 'Ação',
      url: '/basse',
    },    
    {
      name: 'Animação',
      url: '/theme/colors',
    },
    {
      name: 'Aventura',
      url: '/theme/typography',
    },
    {
      name: 'Comédia',
      url: '/buttons',      
    },
    {
      name: 'Documentário',
      url: '/charts',
    },
    {
      name: 'Drama',
      url: '/icons',      
    },
    {
      name: 'Ficção científica',
      url: '/pages',      
    },
    {
      name: 'Guerra',
      url: '/pages',      
    },
    {
      name: 'Policial',
      url: '/pages',      
    },
    {
      name: 'Romance',
      url: '/pages',      
    },
    {
      name: 'Suspense',
      url: '/pages',      
    },
    {
      name: 'Terror',
      url: '/base/cards',      
    }
  ]
};
