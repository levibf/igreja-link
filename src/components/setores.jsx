const setores = [
  {
    id: "s01",
    titulo: "Setor 01 - Sede Estadual",
    link: "/admontese.com/admontesegestao/s01",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "https://docs.google.com/spreadsheets/d/1InjZXexhvkV9Ack_TVn1gYCWqsKIEN4D5GKpWnkWJ0A"
      },
      {
        titulo: "Secretaria",
        link: [
          {
            nome: "Secretaria do Setor",
            link: "https://docs.google.com/spreadsheets/d/18fKF88J2MZj3ZjO4L0n3txGWqqzqcNu1tXWGZgZXRuA"
          },
          {
            nome: "Controle de Membros",
            link: "https://docs.google.com/spreadsheets/d/1nsUFFKHhD15r4QRcu76vvetsd6HKYgmRhkHlFdAzYpE"
          },
          {
            nome: "Cartões de Obreiros",
            link: "https://docs.google.com/spreadsheets/d/1WOTqE2M3GqEpdmtHNA2sU4lt_G0MA_3QvPFFNgUIwOc"
          }
        ]
      },
      {
        titulo: "Patrimônio",
        link: "https://docs.google.com/spreadsheets/d/19B1UAQakk3wtSOGBCyfon1axLfIO2DBctf0NaOhZGy4/"
      }
    ]
  },
  {
    id: "s02",
    titulo: "Setor 02 - Conjunto Araturi",
    link: "/admontese.com/admontesegestao/s02",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s02/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s02/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s02/patrimonio"
      }
    ]
  },
  {
    id: "s03",
    titulo: "Setor 03 - Conjunto Jereissati",
    link: "/admontese.com/admontesegestao/s03",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s03/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s03/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s03/patrimonio"
      }
    ]
  },
  {
    id: "s04",
    titulo: "Setor 04 - Conjunto Ceará",
    link: "/admontese.com/admontesegestao/s04",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s04/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s04/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s04/patrimonio"
      }
    ]
  },
  {
    id: "s05",
    titulo: "Setor 05 - Pajuçara",
    link: "/admontese.com/admontesegestao/s05",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s05/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s05/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s05/patrimonio"
      }
    ]
  },
  {
    id: "s06",
    titulo: "Setor 06 - Barra do Ceará",
    link: "/admontese.com/admontesegestao/s06",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s06/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s06/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s06/patrimonio"
      }
    ]
  },
  {
    id: "s07",
    titulo: "Setor 07 - Cidade dos Funcionários",
    link: "/admontese.com/admontesegestao/s07",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s07/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s07/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s07/patrimonio"
      }
    ]
  },
  {
    id: "s08",
    titulo: "Setor 08 - Serrinha",
    link: "/admontese.com/admontesegestao/s08",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s08/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s08/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s08/patrimonio"
      }
    ]
  },
  {
    id: "s09",
    titulo: "Setor 09 - Conjunto Acaracunzinho",
    link: "/admontese.com/admontesegestao/s09",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s09/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s09/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s09/patrimonio"
      }
    ]
  },
  {
    id: "s10",
    titulo: "Setor 10 - Raul Barbosa",
    link: "/admontese.com/admontesegestao/s10",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s10/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s10/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s10/patrimonio"
      }
    ]
  },
  {
    id: "s11",
    titulo: "Setor 11 - Sítio Bom Futuro",
    link: "/admontese.com/admontesegestao/s11",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s11/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s11/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s11/patrimonio"
      }
    ]
  },
  {
    id: "s12",
    titulo: "Setor 12 - Conjunto Esperança",
    link: "/admontese.com/admontesegestao/s12",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s12/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s12/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s12/patrimonio"
      }
    ]
  },
  {
    id: "s13",
    titulo: "Setor 13 - Parque Albane",
    link: "/admontese.com/admontesegestao/s13",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s13/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s13/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s13/patrimonio"
      }
    ]
  },
  {
    id: "s14",
    titulo: "Setor 14 - Pacatuba",
    link: "/admontese.com/admontesegestao/s14",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s14/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s14/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s14/patrimonio"
      }
    ]
  },
  {
    id: "s15",
    titulo: "Setor 15 - Tabuba",
    link: "/admontese.com/admontesegestao/s15",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s15/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s15/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s15/patrimonio"
      }
    ]
  },
  {
    id: "s16",
    titulo: "Setor 16 - Jardim Iracema",
    link: "/admontese.com/admontesegestao/s16",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s16/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s16/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s16/patrimonio"
      }
    ]
  },
  {
    id: "s17",
    titulo: "Setor 17 - Siqueira",
    link: "/admontese.com/admontesegestao/s17",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s17/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s17/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s17/patrimonio"
      }
    ]
  },
  {
    id: "s18",
    titulo: "Setor 18 - Cidade Oeste",
    link: "/admontese.com/admontesegestao/s18",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s18/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s18/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s18/patrimonio"
      }
    ]
  },
  {
    id: "s19",
    titulo: "Setor 19 - João XXIII",
    link: "/admontese.com/admontesegestao/s19",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s19/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s19/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s19/patrimonio"
      }
    ]
  },
  {
    id: "s20",
    titulo: "Setor 20 - Mondubim",
    link: "/admontese.com/admontesegestao/s20",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s20/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s20/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s20/patrimonio"
      }
    ]
  },
  {
    id: "s21",
    titulo: "Setor 21 - Praia do Futuro",
    link: "/admontese.com/admontesegestao/s21",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s21/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s21/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s21/patrimonio"
      }
    ]
  },
  {
    id: "s22",
    titulo: "Setor 22 - Têxtil",
    link: "/admontese.com/admontesegestao/s22",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s22/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s22/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s22/patrimonio"
      }
    ]
  },
  {
    id: "s23",
    titulo: "Setor 23 - Aquiraz",
    link: "/admontese.com/admontesegestao/s23",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s23/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s23/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s23/patrimonio"
      }
    ]
  },
  {
    id: "s24",
    titulo: "Setor 24 - Maranguape",
    link: "/admontese.com/admontesegestao/s24",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s24/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s24/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s24/patrimonio"
      }
    ]
  },
  {
    id: "s25",
    titulo: "Setor 25 - Bom Sucesso",
    link: "/admontese.com/admontesegestao/s25",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s25/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s25/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s25/patrimonio"
      }
    ]
  },
  {
    id: "s26",
    titulo: "Setor 26 - Cascavel",
    link: "/admontese.com/admontesegestao/s26",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s26/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s26/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s26/patrimonio"
      }
    ]
  },
  {
    id: "s27",
    titulo: "Setor 27 - Barro Preto",
    link: "/admontese.com/admontesegestao/s27",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s27/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s27/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s27/patrimonio"
      }
    ]
  },
  {
    id: "s28",
    titulo: "Setor 28 - Pavuna",
    link: "/admontese.com/admontesegestao/s28",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s28/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s28/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s28/patrimonio"
      }
    ]
  },
  {
    id: "s29",
    titulo: "Setor 29 - Paranguaba",
    link: "/admontese.com/admontesegestao/s29",
    imagem: "https://lh6.googleusercontent.com/37Rl7nOuYeB5U6JhlqB1uU0FeKcajeRs5Z2OhN12DHEY0Ixn7AjM-tplQTgJ2wsSzGsVNGE5P39qF4hNH_ZJl0NSHPOuK7Skrds6_1uFnYlXKYjCumiG29qAsII1xIWBrA=w1280",
    opcoes: [
      {
        titulo: "Tesouraria Setorial",
        link: "/admontese.com/admontesegestao/s29/tesouraria"
      },
      {
        titulo: "Controle de Membros",
        link: "/admontese.com/admontesegestao/s29/membros"
      },
      {
        titulo: "Relatório Patrimonial",
        link: "/admontese.com/admontesegestao/s29/patrimonio"
      }
    ]
  }
];

export default setores