const DUMMY_SUGGESITIONS = {
  fitness: {
    name: {
      'pt-BR': 'Atividades Físicas',
      'en-US': 'Fitness',
    },
    description: {
      'pt-BR':
        'Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla Sugestoes de atividade física sei lá bla bla bla',
      'en-US': 'Fitness suggestions bla bla bla',
    },
    suggestions: [
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 1',
          'en-US': 'Activity 1',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 1',
          'en-US': 'Suggestion 1 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 2',
          'en-US': 'Activity 2',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 2',
          'en-US': 'Suggestion 2 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 3',
          'en-US': 'Activity 3',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 3',
          'en-US': 'Suggestion 3 description',
        },
      },
    ],
  },
  studies: {
    name: {
      'pt-BR': 'Estudos',
      'en-US': 'Studies',
    },
    description: {
      'pt-BR': 'Sugestoes de estudo sei lá bla bla bla',
      'en-US': 'Studies suggestions bla bla bla',
    },
    suggestions: [
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 1',
          'en-US': 'Activity 1',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 1',
          'en-US': 'Suggestion 1 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 2',
          'en-US': 'Activity 2',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 2',
          'en-US': 'Suggestion 2 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 3',
          'en-US': 'Activity 3',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 3',
          'en-US': 'Suggestion 3 description',
        },
      },
    ],
  },
  work: {
    name: {
      'pt-BR': 'Trabalho',
      'en-US': 'Work',
    },
    description: {
      'pt-BR': 'Sugestoes de trabalho sei lá bla bla bla',
      'en-US': 'Work suggestions bla bla bla',
    },
    suggestions: [
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 1',
          'en-US': 'Activity 1',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 1',
          'en-US': 'Suggestion 1 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 2',
          'en-US': 'Activity 2',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 2',
          'en-US': 'Suggestion 2 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 3',
          'en-US': 'Activity 3',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 3',
          'en-US': 'Suggestion 3 description',
        },
      },
      {
        media: 'http://youtube.com',
        name: {
          'pt-BR': 'Atividade 4',
          'en-US': 'Activity 4',
        },
        description: {
          'pt-BR': 'Descrição da sugestão 4',
          'en-US': 'Suggestion 4 description',
        },
      },
    ],
  },
};

const getCategory = (category) => {
  if (!'fitness work studies'.includes(category))
    return DUMMY_SUGGESITIONS.fitness;
  return DUMMY_SUGGESITIONS[category];
};

export default getCategory;
