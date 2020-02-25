const headerList = [
  { name: 'HOME', link: '#' },
  { name: 'ABOUT', link: '#' },
  { name: 'PORTFOLIO', link: '#' },
  { name: 'SERVICES', link: '#' },
  { name: 'BLOG', link: '#' },
  { name: 'CLIENTS', link: '#' },
  { name: 'CONTACT', link: '#' }
]

const aboutData = {
  heading: 'ABOUT',
  paragraph:
    'Aliquatm porttitor ligula sed diam aliquam, sit amet dapibus ante vestibulum. Fusce finibus, dui nec mattisfermentum, purus arcu auctor elit, at ultricies est odio vel nulla. Quisque accumsan eros quis arcu sagittis,sit amet tempor felis ornare.'
}

const skillsData = {
  heading: 'SKILLS'
}

const skillsItemData = [
  {
    heading: 'GRAPHIC DESIGN',
    paragraph:
      'Vivamus accumsan eget mi quis iaculis. Integer tristique cursus sapien, sit amet porttitor neque imperdiet a. Morbi ut dui vehicula, elementum est sed, sagittis quam. Aliquam id nibh eleifend, aliquet metus ultrices, blandit massa.',
    themeColor: '#db7011'
  },
  {
    heading: 'WEB DESIGN',
    paragraph:
      'Vivamus accumsan eget mi quis iaculis. Integer tristique cursus sapien, sit amet porttitor neque imperdiet a. Morbi ut dui vehicula, elementum est sed, sagittis quam. Aliquam id nibh eleifend, aliquet metus ultrices, blandit massa.',
    themeColor: '#cfdb11'
  },
  {
    heading: 'HTML',
    paragraph:
      'Vivamus accumsan eget mi quis iaculis. Integer tristique cursus sapien, sit amet porttitor neque imperdiet a. Morbi ut dui vehicula, elementum est sed, sagittis quam. Aliquam id nibh eleifend, aliquet metus ultrices, blandit massa.',
    themeColor: '#11dba4'
  }
]

const portfolioData = {
  heading: 'PORTFOLIO',
  paragraph:
    'Proin sed nisl suscipit, scelerisque risus non, feugiat est. Sed consequat porttitor metus, sed condimentum turpis. Pellentesque ullamcorper nisi vitae hendrerit gravida. In bibendum suscipit sapien. Nulla ac nulla vitae nunc efficitur semper non nec turpis.'
}

const servicesData = {
  heading: 'SERVICES',
  paragraph:
    'Maecenas at massa a ante porttitor porttitor. Curabitur rutrum mollis sagittis. Pellentesque gravida arcu nisi. In hac habitasse platea dictumst. Morbi viverra lacus quis dolor interdum fringilla. Duis pretium lacus elit, ac cursus ligula lobortis vitae.'
}

const experienceData = {
  heading: 'EXPERIENCE'
}

const experienceItemData = [
  {
    position: 'WEB DESIGNER',
    duration: '2007-2013',
    organisation: 'THEMEFOREST',
    url: 'http://www.themeforest.net/',
    themeColor: '#cfdb11'
  },
  {
    position: 'WEB DEVELOPER',
    duration: '2013-2017',
    organisation: 'PIXEL PERFECT',
    url: 'http://www.pixelperfect.com/',
    themeColor: '#11dba4'
  }
]

const processData = {
  heading: 'WORK PROCESS',
  paragraph:
    'At massa a ante porttitor porttitor. Curabitur rutrum mollis sagittis. Pellentesque gravida arcu nisi. In hac habitasse platea dictumst. Morbi viverra lacus quis dolor interdum fringilla. Duis pretium lacus elit, ac cursus ligula lobortis.'
}

const blogData = {
  heading: 'BLOG',
  paragraph:
    'Massa a ante porttitor porttitor. Curabitur rutrum mollis sagittis. Pellentesque gravida arcu nisi. In hac habitasse platea dictumst. Morbi viverra lacus quis dolor interdum fringilla. Duis pretium lacus elit, ac cursus ligula.'
}

const clientsData = {
  heading: 'CLIENTS',
  paragraph:
    'A ante porttitor porttitor. Curabitur rutrum mollis sagittis. Pellentesque gravida arcu nisi. In hac habitasse platea dictumst. Morbi viverra lacus quis dolor interdum fringilla. Duis pretium lacus elit, ac cursus.'
}

const contactData = {
  heading: 'CONTACT',
  paragraph:
    'Ante porttitor porttitor. Curabitur rutrum mollis sagittis. Pellentesque gravida arcu nisi. In hac habitasse platea dictumst. Morbi viverra lacus quis dolor interdum fringilla. Duis pretium lacus elit, ac.'
}

const serviceItemsData = [
  {
    heading: 'WEB DEVELOPMENT',
    paragraph:
      'Integer vitae libero et est finibus pretium et a tellus. Etiam sagittis neque est, at finibus nulla vulputate ut. Suspendisse augue sem tincid.',
    icon: require('./images/webdev-icon.png'),
    themeColor: '#11dba4'
  },
  {
    heading: 'GRAPHIC DESIGN',
    paragraph: 'Donec lobortis nisl sem, a accumsan est ornare eu. Etiam venenatis tortor, non odio dapibus posuere.',
    icon: require('./images/graph-icon.png'),
    themeColor: '#db7011'
  },
  {
    heading: 'WEB DESIGN',
    paragraph:
      'Mauris vitae purus eget mauris viverra hendrerit quis in ligula. Donec lobortis nisl sem, a accumsan est ornare eu.',
    icon: require('./images/webdes-icon.png'),
    themeColor: '#cfdb11'
  },
  {
    heading: 'SEO',
    paragraph:
      'Integer vitae libero et est finibus pretium et a tellus. Etiam sagittis neque est, at finibus nulla vulputate ut. Suspendisse augue sem tincid.',
    icon: require('./images/seo-icon.png'),
    themeColor: '#e4144a'
  }
]

const ProcessItemsData = [
  {
    heading: 'RESEARCH',
    paragraph: 'Nunc mollis at arcu mollis hendrerit. Mauris sollicitudin ipsum nec facilisis suscipit.',
    icon: require('./images/research.png'),
    themeColor: '#11dba4'
  },
  {
    heading: 'PLANNING',
    paragraph: 'Fusce tortor velit, interdum id velit et, posuere tempus lacus.',
    icon: require('./images/planning.png'),
    themeColor: '#db7011'
  },
  {
    heading: 'CREATE',
    paragraph: 'Curabitur dictum eleifend efficitur. Donec ligula magna, vestibulum sit amet condimentum id.',
    icon: require('./images/create.png'),
    themeColor: '#cfdb11'
  },
  {
    heading: 'DELIVER',
    paragraph: 'Cras velit nulla, pharetra id ullamcorper eu, pellentesque quis lorem. Nunc varius blandit ante id.',
    icon: require('./images/deliver.png'),
    themeColor: '#e4144a'
  }
]

const ClientsItemsData = [
  require('./images/partner1.png'),
  require('./images/partner2.png'),
  require('./images/partner3.png'),
  require('./images/partner4.png')
]

const ContactItemsData = [
  { iconClass: 'fa fa-envelope', type: 'E-MAIL', value: 'info@youremail.com' },
  { iconClass: 'fa fa-phone', type: 'PHONE', value: '+012 345 6789' },
  { iconClass: 'fa fa-map-marker', type: 'ADDRESS', value: 'Don Joe, 500' }
]

const FootSocialData = [
  { iconClass: 'fa fa-google-plus-square' },
  { iconClass: 'fa fa-facebook-square' },
  { iconClass: 'fa fa-google' },
  { iconClass: 'fa fa-linkedin-square' },
  { iconClass: 'fa fa-behance' },
  { iconClass: 'fa fa-vimeo-square' }
]

export {
  headerList,
  aboutData,
  skillsData,
  skillsItemData,
  experienceData,
  experienceItemData,
  portfolioData,
  servicesData,
  processData,
  blogData,
  clientsData,
  contactData,
  serviceItemsData,
  ProcessItemsData,
  ClientsItemsData,
  ContactItemsData,
  FootSocialData
}
