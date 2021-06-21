module.exports = {
  distDir: 'out',
  
    async redirects() {
      return [
        {
          source: '/consultantaOnline',
          destination: '/consultanta-online',
          permanent: true,
        },
        {
          source: '/dreptpenal',
          destination: '/drept-penal',
          permanent: true,
        },
        
        {
          source: '/dreptulfamiliei',
          destination: '/dreptul-familiei',
          permanent: true,
        },
        {
          source: '/dreptcivil',
          destination: '/drept-civil',
          permanent: true,
        },
        {
          source: '/MalpraxisMedical',
          destination: '/malpraxis-medical',
          permanent: true,
        },
        {
          source: '/DreptulMuncii',
          destination: '/dreptul-muncii',
          permanent: true,
        },
        {
          source: '/ExecutariSilite',
          destination: '/executari-silite',
          permanent: true,
        },
        {
          source: '/DreptImobiliar',
          destination: '/drept-imobiliar',
          permanent: true,
        },
        {
          source: '/DreptContraventional',
          destination: '/drept-contraventional',
          permanent: true,
        },
        {
          source: '/DreptBancar',
          destination: '/drept-bancar',
          permanent: true,
        },
        {
          source: '/DreptAdministrativ',
          destination: '/drept-administrativ',
          permanent: true,
        },
      ]
    },
  }