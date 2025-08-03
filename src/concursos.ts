export interface Pergunta {
    pergunta: string;
    opcoes: Record<string, string>;
    resposta: string;
}

export interface Categoria {
    nome: string;
    perguntas: Pergunta[];
}

export interface Concurso {
    id: number;
    nome: string;
    categorias: Categoria[];
}

export const concursos: Concurso[] = [
    {
        "id": 1,
        "nome": "Tec. Radiologia - EDITAL N° 08/2023",
        "categorias": [
            {
                "nome": "LÍNGUA PORTUGUESA",
                "perguntas": [
                    {
                        "pergunta": "01) Com base nas informações do texto e nas relações existentes entre as partes que o compõem, assinale a alternativa INCORRETA:",
                        "opcoes": {
                            "A": "O jovem americano Draven fuma desde os 13 anos, mas seus pulmões pareciam de uma pessoa que fumava há três décadas.",
                            "B": "O jovem Draven começou a fumar nos finais de semana.",
                            "C": "Primeiramente, o pulmão direito de Draven entrou em colapso o que levou-o ao hospital com 17 anos.",
                            "D": "Atualmente, Draven faz campanhas de conscientização para jovens pararem de usar os cigarros eletrônicos.",
                            "E": "No Reino Unido, um em cada dez alunos do ensino médio são fumantes de vapes."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "02) Assinale a alternativa cuja letra g NÃO represente o mesmo fonema representado pela letra g na palavra fadiga:",
                        "opcoes": {
                            "A": "Cirurgia.",
                            "B": "Aguda.",
                            "C": "Engolia.",
                            "D": "Perigoso.",
                            "E": "Cigarro."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "03) Assinale a alternativa cuja palavra NÃO apresente dígrafo:",
                        "opcoes": {
                            "A": "Tosse.",
                            "B": "Chiclete.",
                            "C": "Problema.",
                            "D": "Tinha.",
                            "E": "Melhor."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "04) Assinale a alternativa cuja divisão silábica da palavra esteja INCORRETA:",
                        "opcoes": {
                            "A": "E-qui-pe.",
                            "B": "Pa-ssa-do.",
                            "C": "Ci-gar-ro.",
                            "D": "Bo-lhas.",
                            "E": "Des-ses."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "05) Assinale a alternativa que apresente palavra paroxítona:",
                        "opcoes": {
                            "A": "Médica.",
                            "B": "Súbito.",
                            "C": "Eletrônico.",
                            "D": "Última.",
                            "E": "Início."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "06) Assinale a alternativa que apresente a circunstância estabelecida pelo termo em destaque no período: Mudei para os vapes descartáveis e provavelmente usei um desses a cada dois ou três dias.",
                        "opcoes": {
                            "A": "Dúvida.",
                            "B": "Tempo.",
                            "C": "Afirmação.",
                            "D": "Lugar.",
                            "E": "Intensidade."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "07) Assinale a alternativa que apresente a circunstância estabelecida pelos termos em destaque no período: Dois meses depois, em dezembro de 2021, o pulmão direito do jovem também começou a apresentar os mesmos sintomas.",
                        "opcoes": {
                            "A": "Lugar.",
                            "B": "Modo.",
                            "C": "Afirmação.",
                            "D": "Tempo.",
                            "E": "Dúvida."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "08) Assinale a alternativa que apresente a classe morfológica do termo em destaque no período: Eu não fumava antes de começar a vaporizar.",
                        "opcoes": {
                            "A": "Substantivo.",
                            "B": "Advérbio.",
                            "C": "Verbo.",
                            "D": "Adjetivo.",
                            "E": "Preposição."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "09) Assinale a alternativa que apresente a justificativa correta para o emprego da crase no período: Pelo menos uma vez por dia eu o reabastecia, às vezes uma vez a cada dois dias.",
                        "opcoes": {
                            "A": "Regência Verbal.",
                            "B": "Locução Prepositiva.",
                            "C": "Locução Adverbial.",
                            "D": "Regência Nominal.",
                            "E": "Locução Conjuntiva."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "10) Assinale a alternativa que apresente a função sintática dos termos em destaque no período: Nos Estados Unidos, um em cada dez alunos do ensino fundamental usam os dispositivos.",
                        "opcoes": {
                            "A": "Sujeito.",
                            "B": "Objeto Indireto.",
                            "C": "Predicativo do Sujeito.",
                            "D": "Agente da Voz Passiva.",
                            "E": "Objeto Direto."
                        },
                        "resposta": "A"
                    }
                ]
            },
            {
                "nome": "MATEMÁTICA/RACIOCÍNIO LÓGICO",
                "perguntas": [
                    {
                        "pergunta": "11) Um curso tem ao todo 40 horas de duração, este curso será ministrado em aulas de 50 minutos cada. Assim podemos afirmar que a quantidade de aulas até completar as 40 horas é igual a:",
                        "opcoes": {
                            "A": "36 aulas de 50 minutos.",
                            "B": "48 aulas de 50 minutos.",
                            "C": "50 aulas de 50 minutos.",
                            "D": "52 aulas de 50 minutos.",
                            "E": "54 aulas de 50 minutos."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "12) Sabendo que A+B=10 e que A é 4 quatro vezes o valor de B. O valor de A - B é igual a:",
                        "opcoes": {
                            "A": "2.",
                            "B": "-2.",
                            "C": "4.",
                            "D": "6.",
                            "E": "-4."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "13) Uma oferta de um açougue é descrita na tabela abaixo: Tipos de Carne: Filé de peito (500g), Sobrecoxa (1000g), Bisteca suína (750g), Carne moída bovina (500g), Bife bovino (750g), Costela bovina (1000g). O valor deste combo de carnes é de R$ 89,55. Considerando o peso total das carnes, qual é o preço por quilo de carne deste combo?",
                        "opcoes": {
                            "A": "R$ 19,90.",
                            "B": "R$ 18,75.",
                            "C": "R$ 21,45.",
                            "D": "R$ 17,95.",
                            "E": "R$ 22,90."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "14) Um triângulo de base 6 cm e altura igual a 10 cm, tem como área total 30 cm². Se dobrar o valor da base e da altura deste triângulo a sua nova área vai ser de:",
                        "opcoes": {
                            "A": "60 cm²",
                            "B": "90 cm²",
                            "C": "100 cm²",
                            "D": "120 cm²",
                            "E": "150 cm²"
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "15) Na empresa X a licença maternidade é de praxe 120 dias, mas caso a mãe colaboradora da empresa solicite é dado mais 50% de prorrogação do prazo de licença. Se uma das colaboradoras desta empresa solicitou a prorrogação deste prazo, o período de licença é igual a (para o cálculo considere todos os meses com 30 dias):",
                        "opcoes": {
                            "A": "4,5 meses.",
                            "B": "1,5 trimestres.",
                            "C": "2,5 bimestres.",
                            "D": "1,0 quadrimestre.",
                            "E": "1,0 semestre."
                        },
                        "resposta": "E"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS GERAIS/ATUALIDADES",
                "perguntas": [
                    {
                        "pergunta": "16) A região onde atualmente se localiza o município de Tijucas do Sul foi usada como passagem para uma rota histórica de troca de mercadorias entre localidades como Curitiba e São Francisco do Sul. Qual das opções abaixo se refere ao nome desta rota? Assinale a alternativa correta:",
                        "opcoes": {
                            "A": "Caminho dos Ambrósios.",
                            "B": "Boiadeira dos Mourões.",
                            "C": "Estrada da Graciosa.",
                            "D": "Carreiro das Viúvas.",
                            "E": "Caminho de Palmas."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "17) Qual dos artistas plásticos abaixo que, por volta dos anos 1970, escolheu o município de Tijucas do Sul para morar, e ao longo de sua vida produziu mais de 4.000 obras catalogadas e registradas, se tornando referência cultural e turística da cidade? Assinale a alternativa correta:",
                        "opcoes": {
                            "A": "Pablo Picasso.",
                            "B": "Sergius Erdelyi.",
                            "C": "Banksy.",
                            "D": "Paul Cézanne.",
                            "E": "Andy Warhol."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "18) A onda de ataques que varreu o Rio Grande do Norte durante o mês de março de 2023, foi descrita pela imprensa nacional como uma das grandes crises de segurança pública deste ano no país. Qual das cidades abaixo foram afetadas por estes ataques? Analise as assertivas e assinale a alternativa correta: I - Mossoró. II - Teresina. III - Natal. IV - Salvador.",
                        "opcoes": {
                            "A": "Apenas I e II.",
                            "B": "Apenas II e III.",
                            "C": "Apenas I e III.",
                            "D": "Apenas II e IV.",
                            "E": "Apenas I e IV."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "19) O desastre ambiental e social que teve como epicentro as cidades Mariana e Brumadinho, mas também se espraiou por outras regiões, continua sem solução definitiva. Recentemente, as empresas que faziam parte do consórcio Samarco foram condenadas a pagar 10 bilhões de reais em indenização para recuperar cidades do Espírito Santo. Tal decisão ainda cabe recurso, mas demonstram mais um episódio de longas batalhas jurídicas. Qual das opções abaixo se referem a empresas do ramo da mineração envolvidas nesse caso? Assinale a alternativa correta: I - Vale. II - BHP Billiton. III- Petrobrás. IV - Shell.",
                        "opcoes": {
                            "A": "Apenas I e III.",
                            "B": "Apenas II e IV.",
                            "C": "Apenas II e III.",
                            "D": "Apenas I e II.",
                            "E": "Apenas I e IV."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "20) Recentemente, o Grupo Petrópolis, dono de algumas das marcas de bebidas mais populares do país, pediu recuperação judicial. Essa ação demonstrou as dificuldades financeiras advindas do baixo poder de compra do público alvo da empresa, focado nas classes Ce D, somado às mudanças de hábitos de consumo desde a pandemia. Qual das opções abaixo se refere a uma marca cuja proprietária é o Grupo Petrópolis? Assinale a alternativa correta:",
                        "opcoes": {
                            "A": "Brahma.",
                            "B": "Heineken.",
                            "C": "Budweiser.",
                            "D": "Skol.",
                            "E": "Itaipava."
                        },
                        "resposta": "E"
                    }
                ]
            },
            {
                "nome": "LEGISLAÇÃO",
                "perguntas": [
                    {
                        "pergunta": "21) Com base na lei orgânica do município de Tijucas do Sul, é correto afirmar que:",
                        "opcoes": {
                            "A": "O Município poderá criar, organizar e suprimir distritos administrativos, observada a legislação municipal.",
                            "B": "O Município poderá criar, organizar e suprimir distritos administrativos, observada a legislação federal.",
                            "C": "O Município poderá criar, organizar e suprimir distritos administrativos, observada a legislação estadual.",
                            "D": "O Município poderá criar, organizar e suprimir distritos administrativos, observada a legislação municipal, estadual e federal.",
                            "E": "O Município não poderá criar, organizar ou suprimir distritos administrativos."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "22) Em observância a lei orgânica do município de Tijucas do Sul, é correto afirmar:",
                        "opcoes": {
                            "A": "A eleição do Prefeito e do Vice-Prefeito realizar-se-á simultaneamente, no segundo domingo do mês de outubro do ano anterior ao término do mandato dos que devam suceder.",
                            "B": "A eleição do Prefeito e do Vice-Prefeito realizar-se-á simultaneamente, no terceiro domingo do mês de outubro do ano anterior ao término do mandato dos que devam suceder.",
                            "C": "A eleição do Prefeito e do Vice-Prefeito realizar-se-á simultaneamente, no último domingo do mês de outubro do ano anterior ao término do mandato dos que devam suceder.",
                            "D": "A eleição do Prefeito e do Vice-Prefeito realizar-se-á simultaneamente, no primeiro domingo do mês de outubro do ano anterior ao término do mandato dos que devam suceder.",
                            "E": "A eleição do Prefeito realizar-se-á no primeiro domingo do mês de outubro do ano anterior ao término do mandato dos que devam suceder, e do Vice-Prefeito no domingo subsequente em eleição interna."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "23) Ainda, sobre a lei orgânica do município de Tijucas do Sul, no que tange FISCALIZAÇÃO CONTÁBIL, FINANCEIRA E ORÇAMENTÁRIA, aponte a alternativa correta:",
                        "opcoes": {
                            "A": "A prestação de contas de recursos recebidos do Governo Federal e do Governo Estadual será feita, respectivamente, ao Tribunal de Contas da União e ao Tribunal de Contas do Estado, sem prejuízo da prestação de contas à Câmara Municipal.",
                            "B": "A prestação de contas de recursos recebidos do Governo Federal e do Governo Estadual será feita, ao Tribunal de Contas da União, sendo que o Tribunal de Contas da União transmitirá a prestação ao Tribunal de Contas do Estado, sem prejuízo da prestação de contas à Câmara Municipal.",
                            "C": "A prestação de contas de recursos recebidos do Governo Federal e do Governo Estadual será feita, ao Tribunal de Contas da União, sendo que o Tribunal de Contas da União transmitirá a prestação ao Tribunal de Contas do Estado, que por sua vez transmitirá o resultado à Câmara Municipal.",
                            "D": "A prestação de contas de recursos recebidos de associações privadas, do Governo Federal e do Governo Estadual será feita, respectivamente, ao Tribunal de Contas da União e ao Tribunal de Contas do Estado, sem prejuízo da prestação de contas à Câmara Municipal.",
                            "E": "A prestação de contas de recursos recebidos de partidos políticos, do Governo Federal e do Governo Estadual será feita, respectivamente, ao Tribunal de Contas da União e ao Tribunal de Contas do Estado, sem prejuízo da prestação de contas à Câmara Municipal."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "24) Com seu conhecimento no Estatuto dos Servidores Municipais da comarca de Tijucas do Sul, no tocante ser proibido ao servidor, é correto afirmar que:",
                        "opcoes": {
                            "A": "Participar de gerência ou administração de empresa privada, de sociedade civil ou exercer o comércio, exceto na qualidade de autônomo.",
                            "B": "Atuar, como procurador ou intermediário, junto à repartições públicas, sendo defeso quando se tratar de benefícios previdenciários ou assistências de parentes até o segundo grau e de cônjuge ou companheiro.",
                            "C": "Opor resistência mesmo que justificada ao andamento de documento, de processo ou execução de serviço.",
                            "D": "Cometer a outro servidor atribuições compatíveis ao cargo que ocupa, sob pena de acumulo de serviço.",
                            "E": "Manter sob sua chefia imediata, em cargo ou função de confiança, cônjuge, companheiro ou companheira ou parente até o segundo grau civil."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "25) Continuando com o seu conhecimento no Estatuto dos Servidores Municipais da comarca de Tijucas do Sul, sobre penalidades, assinale a alternativa correta:",
                        "opcoes": {
                            "A": "As penalidades de advertência e de suspensão terão seus registros cancelados, após o decurso de três (3) e seis (6) anos de efetivo exercício, respectivamente, se o servidor, nesse período, não incorrer em nova infração disciplinar.",
                            "B": "Será punido com suspensão de até sessenta (60) dias 0 servidor que, injustificadamente, recusar-se a ser submetido a inspeção médica determinada pela autoridade competente, cessando os efeitos da penalidade uma vez cumprida a determinação.",
                            "C": "A suspensão será aplicada em caso de reincidência das faltas punidas com advertência e a de violação das demais proibições que não tipifiquem infração sujeita a penalidade de demissão, não podendo exceder de noventa (90) dias.",
                            "D": "Será punido com suspensão de até trinta (30) dias o servidor que, injustificadamente, recusar-se a ser submetido a inspeção médica determinada pela autoridade competente, cessando os efeitos da penalidade uma vez cumprida a determinação.",
                            "E": "Quando houver conveniência para o serviço, a penalidade de suspensão poderá ser convertida em multa, na base de trinta por cento (30%) por dia da remuneração, ficando o servidor obrigado a permanecer em serviço."
                        },
                        "resposta": "D"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS ESPECÍFICOS",
                "perguntas": [
                    {
                        "pergunta": "26) Referindo-se a anatomia humana, sabemos que existe a diferença entre a estrutura denominada quadril e bacia, portanto podemos definir que o quadril é formada por quais ossos?",
                        "opcoes": {
                            "A": "Ílio, ísquio e púbis.",
                            "B": "Ílio, ísquio, púbis, sacro e cóccix.",
                            "C": "Sacro e cóccix.",
                            "D": "Ílio, ísquio, sacro e cóccix.",
                            "E": "Ílio e sacro."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "27) Clinicamente o LIGAMENTO DE TREITZ marca o limite entre o trato gastrointestinal superior e inferior. Sendo assim onde se situa o referido ligamento?",
                        "opcoes": {
                            "A": "Flexura hepática.",
                            "B": "Na porção pilórica.",
                            "C": "Na junção gastroesofágica.",
                            "D": "Na junção íleo-cecal.",
                            "E": "Na junção duodeno-jejunal."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "28) Qual a temperatura ideal para a injeção do meio de contraste iodado?",
                        "opcoes": {
                            "A": "07°C",
                            "B": "10°C.",
                            "C": "37°C",
                            "D": "47°C",
                            "E": "50°C"
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "29) Qual a carga elétrica do elétron?",
                        "opcoes": {
                            "A": "-1.6.10⁻¹⁹C.",
                            "B": "+1.6.10⁻¹⁹C.",
                            "C": "0,336.10⁻⁹C",
                            "D": "-16,6.10⁻¹⁹C.",
                            "E": "+16,6.10⁻¹⁹C."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "30) Um adulto possui 206 ossos considerado constantes, mas o número pode variar de acordo com alguns aspectos. Qual o menor osso do esqueleto humano?",
                        "opcoes": {
                            "A": "Fêmur.",
                            "B": "Fioide.",
                            "C": "Martelo.",
                            "D": "Estribo.",
                            "E": "Bigorna."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "31) O que é a LINHA DE REID?",
                        "opcoes": {
                            "A": "Um músculo.",
                            "B": "Um tendão.",
                            "C": "Um nervo.",
                            "D": "Uma linha de referência no posicionamento de crânio.",
                            "E": "Referência cirúrgica."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "32) Os écrans têm a função de emitir luz quando exposto aos raios-x, e esta tela intensificadora pode ser confeccionada por diferentes materiais, entre eles alguns sais, como:",
                        "opcoes": {
                            "A": "Hidróxido de cálcio.",
                            "B": "Tungstato de cálcio.",
                            "C": "Oxalato de cálcio.",
                            "D": "Sulfato de zinco.",
                            "E": "Óxido de zinco."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "33) Para o exercício da profissão de técnico em radiologia deve ser portador de certificado de conclusão do ensino médio e possuir formação profissional mínima de nível técnico em radiologia, esta afirmação está de acordo com a seguinte lei:",
                        "opcoes": {
                            "A": "Lei 8.080/90 art. 1º.",
                            "B": "Lei 7.394/85 art. 2º.",
                            "C": "Lei 8.080/90 art. 2º.",
                            "D": "Lei 8.142/90 art. 7º.",
                            "E": "Lei 7.394/85 art. 14º."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "34) De acordo com o código de ética profissional, após notificação do conselho nacional, qual o prazo para entrar com recurso?",
                        "opcoes": {
                            "A": "Ao penalizado caberá recurso suspensivo ao Conselho Nacional até 30 dias após a notificação.",
                            "B": "Ao penalizado caberá recurso suspensivo ao Conselho Nacional até 40 dias após a notificação.",
                            "C": "Ao penalizado caberá recurso suspensivo ao Conselho Nacional até 45 dias após a notificação.",
                            "D": "Ao penalizado caberá recurso suspensivo ao Conselho Nacional até 90 dias após a notificação.",
                            "E": "Ao penalizado caberá recurso suspensivo ao Conselho Nacional até 120 dias após a notificação."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "35) Quais leis que regem e regulamentam o SUS?",
                        "opcoes": {
                            "A": "Lei 8.069/90 e lei 8.112/90.",
                            "B": "Lei 8.080/90 e lei 8.142/90.",
                            "C": "Lei 8.081/90 e lei 8.069/90.",
                            "D": "Lei 8.112/90 e lei 8.113/90.",
                            "E": "Lei 8.069/90 e lei 8.070/90."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "36) Em ressonância magnética o que é a sequência FAST SPIN ECO?",
                        "opcoes": {
                            "A": "É a sequência que utiliza múltiplos pulsos de 90° para um mesmo corte, reduzindo drasticamente o tempo de aquisição de imagens.",
                            "B": "É a sequência que utiliza múltiplos pulsos de 180° para um mesmo corte, aumentando drasticamente o tempo de aquisição de imagens.",
                            "C": "É a sequência que utiliza múltiplos pulsos de 90° e 180° para um mesmo corte, reduzindo drasticamente o tempo de aquisição de imagens.",
                            "D": "É a sequência que utiliza múltiplos pulsos de 90° e 180° para um mesmo corte, aumentando drasticamente o tempo de aquisição de imagens.",
                            "E": "É a sequência que utiliza múltiplos pulsos de 180° para um mesmo corte, reduzindo drasticamente o tempo de aquisição de imagens."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "37) Qual é a grandeza radiológica de dose absorvida em radioterapia?",
                        "opcoes": {
                            "A": "kV",
                            "B": "R",
                            "C": "Gy",
                            "D": "mSv",
                            "E": "C"
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "38) Como é chamado o espaço existente entre as duas pleuras?",
                        "opcoes": {
                            "A": "Diafragma.",
                            "B": "Espaço aórtico.",
                            "C": "Cavidade abdominal.",
                            "D": "Cavidade pleural.",
                            "E": "Flexura esplênica."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "39) Qual a função do hipossulfito de sódio?",
                        "opcoes": {
                            "A": "Parar de maneira imediata a revelação.",
                            "B": "Impedir o amolecimento da gelatina.",
                            "C": "Regular a duração da revelação.",
                            "D": "Dissolver a prata não precipitada, tornando transparentes as partes não irradiadas.",
                            "E": "Responsável por evitar a decomposição do fixador."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "40) Qual o nome do exame indicado para auxiliar na diferenciação entre uma curva deformante (primária) e a curvatura compensatória, na rotina para escoliose, onde são obtidas duas imagens: uma PA ou AP ereta padrão e outra com o pé ou o quadril do lado convexo da curva, elevado.",
                        "opcoes": {
                            "A": "Método de Haas.",
                            "B": "Método de Schuller.",
                            "C": "Método de Ferguson.",
                            "D": "Método de Law.",
                            "E": "Método de Danelius-Miller."
                        },
                        "resposta": "C"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "nome": "(I.A) 1 - Tec. Radiologia - EDITAL N° 08/2023",
        "categorias": [
            {
                "nome": "LÍNGUA PORTUGUESA",
                "perguntas": [
                    {
                        "pergunta": "01) Qual das alternativas abaixo apresenta uma afirmação incorreta sobre a morfologia das palavras?",
                        "opcoes": {
                            "A": "O plural de 'cidadão' é 'cidadãos'.",
                            "B": "O grau superlativo sintético de 'fácil' é 'facílimo'.",
                            "C": "A palavra 'fielmente' é um advérbio de modo.",
                            "D": "A palavra 'impossível' é formada por prefixação.",
                            "E": "A palavra 'gira-sol' é um substantivo composto por aglutinação."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "02) Em qual das palavras abaixo a letra 's' representa o mesmo fonema que em 'casa'?",
                        "opcoes": {
                            "A": "Subir.",
                            "B": "Passo.",
                            "C": "Pêssego.",
                            "D": "Mês.",
                            "E": "Desenho."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "03) Assinale a alternativa que contém uma palavra com dígrafo vocálico:",
                        "opcoes": {
                            "A": "Guerra.",
                            "B": "Filho.",
                            "C": "Crescimento.",
                            "D": "Enquanto.",
                            "E": "Carro."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "04) A palavra 'conhecimento' tem a divisão silábica correta em:",
                        "opcoes": {
                            "A": "co-nhe-ci-men-to.",
                            "B": "co-nhe-ci-men-tó.",
                            "C": "co-nhe-ci-men-to.",
                            "D": "co-nhe-ci-men-tó.",
                            "E": "co-nhe-ci-men-to."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "05) Qual das palavras a seguir é proparoxítona?",
                        "opcoes": {
                            "A": "Mesa.",
                            "B": "Janela.",
                            "C": "Lâmpada.",
                            "D": "Carro.",
                            "E": "Menina."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "06) Na frase 'Ele chegou tarde para o compromisso.', o termo 'tarde' estabelece uma circunstância de:",
                        "opcoes": {
                            "A": "Modo.",
                            "B": "Tempo.",
                            "C": "Lugar.",
                            "D": "Intensidade.",
                            "E": "Dúvida."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "07) Na frase 'Provavelmente, ele não virá para o jantar.', o advérbio 'Provavelmente' expressa uma circunstância de:",
                        "opcoes": {
                            "A": "Lugar.",
                            "B": "Tempo.",
                            "C": "Dúvida.",
                            "D": "Intensidade.",
                            "E": "Afirmação."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "08) Qual é a classe morfológica da palavra 'linda' na frase 'A paisagem é muito linda.'?",
                        "opcoes": {
                            "A": "Substantivo.",
                            "B": "Adjetivo.",
                            "C": "Verbo.",
                            "D": "Advérbio.",
                            "E": "Conjunção."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "09) Em qual das opções o uso da crase é obrigatório?",
                        "opcoes": {
                            "A": "Fui a Bahia.",
                            "B": "Ele foi à feira.",
                            "C": "Fui à pé.",
                            "D": "Ele foi a casa de seu amigo.",
                            "E": "Ele foi à pé."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "10) Na frase 'O professor explicou a matéria aos alunos.', qual a função sintática dos termos 'a matéria' e 'aos alunos'?",
                        "opcoes": {
                            "A": "Sujeito e Objeto Direto.",
                            "B": "Objeto Direto e Objeto Indireto.",
                            "C": "Objeto Indireto e Objeto Direto.",
                            "D": "Predicativo do Sujeito e Objeto Direto.",
                            "E": "Objeto Direto e Adjunto Adnominal."
                        },
                        "resposta": "B"
                    }
                ]
            },
            {
                "nome": "MATEMÁTICA/RACIOCÍNIO LÓGICO",
                "perguntas": [
                    {
                        "pergunta": "11) Uma viagem de 250 km foi feita em 4 horas. Qual a velocidade média em km/h?",
                        "opcoes": {
                            "A": "60 km/h.",
                            "B": "62,5 km/h.",
                            "C": "65 km/h.",
                            "D": "67,5 km/h.",
                            "E": "70 km/h."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "12) Sabendo que X + Y = 12 e que X é o dobro do valor de Y. O valor de X - Y é igual a:",
                        "opcoes": {
                            "A": "2.",
                            "B": "4.",
                            "C": "6.",
                            "D": "8.",
                            "E": "10."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "13) Um supermercado vende um combo de frutas por R$ 25,00. O combo contém 2kg de maçã, 1kg de banana e 500g de uva. Qual é o preço por quilo de fruta neste combo?",
                        "opcoes": {
                            "A": "R$ 6,00.",
                            "B": "R$ 7,14.",
                            "C": "R$ 8,33.",
                            "D": "R$ 9,00.",
                            "E": "R$ 10,00."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "14) A área de um retângulo é 40 m². Se o comprimento e a largura deste retângulo forem duplicados, qual será a nova área?",
                        "opcoes": {
                            "A": "80 m².",
                            "B": "120 m².",
                            "C": "160 m².",
                            "D": "200 m².",
                            "E": "240 m²."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "15) Um funcionário tem um salário-base de R$ 3.000,00. Se ele receber um aumento de 15%, qual será seu novo salário?",
                        "opcoes": {
                            "A": "R$ 3.300,00.",
                            "B": "R$ 3.450,00.",
                            "C": "R$ 3.500,00.",
                            "D": "R$ 3.600,00.",
                            "E": "R$ 3.750,00."
                        },
                        "resposta": "B"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS GERAIS/ATUALIDADES",
                "perguntas": [
                    {
                        "pergunta": "16) Qual das rotas históricas abaixo foi um importante caminho de comércio de gado entre o Rio Grande do Sul e as feiras de Sorocaba, em São Paulo?",
                        "opcoes": {
                            "A": "Caminho do Ouro.",
                            "B": "Caminho das Bandeiras.",
                            "C": "Caminho das Tropas.",
                            "D": "Estrada Real.",
                            "E": "Caminho da Soja."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "17) Qual artista plástico brasileiro é conhecido por suas obras de arte que utilizam a técnica da colagem e que abordam a cultura popular brasileira?",
                        "opcoes": {
                            "A": "Tarsila do Amaral.",
                            "B": "Vik Muniz.",
                            "C": "Cândido Portinari.",
                            "D": "Di Cavalcanti.",
                            "E": "Anita Malfatti."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "18) Em 2023, um ciclone extratropical causou grandes inundações e estragos em diversas cidades do sul do Brasil, com destaque para qual estado?",
                        "opcoes": {
                            "A": "Santa Catarina.",
                            "B": "Paraná.",
                            "C": "São Paulo.",
                            "D": "Rio Grande do Sul.",
                            "E": "Rio de Janeiro."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "19) Qual das empresas abaixo é uma das maiores produtoras de celulose e papel do Brasil, com forte presença internacional e foco em sustentabilidade?",
                        "opcoes": {
                            "A": "Petrobras.",
                            "B": "Vale.",
                            "C": "Embraer.",
                            "D": "Suzano.",
                            "E": "Gerdau."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "20) Qual marca de cerveja não pertence ao Grupo Petrópolis?",
                        "opcoes": {
                            "A": "Petra.",
                            "B": "Crystal.",
                            "C": "Lokal.",
                            "D": "Devassa.",
                            "E": "Amstel."
                        },
                        "resposta": "E"
                    }
                ]
            },
            {
                "nome": "LEGISLAÇÃO",
                "perguntas": [
                    {
                        "pergunta": "21) De acordo com a Lei de Acesso à Informação (Lei nº 12.527/2011), o sigilo de informações consideradas ultrassecretas pode ter seu prazo de vigência prorrogado por quantas vezes?",
                        "opcoes": {
                            "A": "Duas.",
                            "B": "Uma.",
                            "C": "Três.",
                            "D": "Nenhuma.",
                            "E": "Ilimitadas."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "22) Segundo a Constituição Federal de 1988, o mandato do Presidente da República é de:",
                        "opcoes": {
                            "A": "2 anos, permitida a reeleição.",
                            "B": "4 anos, permitida a reeleição.",
                            "C": "4 anos, proibida a reeleição.",
                            "D": "5 anos, permitida a reeleição.",
                            "E": "6 anos, proibida a reeleição."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "23) Qual é o órgão responsável pela fiscalização das contas do Poder Executivo em nível federal, com o auxílio do Congresso Nacional?",
                        "opcoes": {
                            "A": "Supremo Tribunal Federal.",
                            "B": "Tribunal de Contas da União.",
                            "C": "Controladoria-Geral da União.",
                            "D": "Ministério Público Federal.",
                            "E": "Banco Central do Brasil."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "24) Conforme o Código de Ética do Servidor Público Federal (Decreto nº 1.171/94), qual das seguintes condutas é considerada proibida ao servidor?",
                        "opcoes": {
                            "A": "Atuar como procurador de terceiros em repartição pública.",
                            "B": "Aceitar convites para eventos sociais.",
                            "C": "Participar de atividades sindicais.",
                            "D": "Receber homenagens de colegas de trabalho.",
                            "E": "Dar informações sigilosas a pessoas não autorizadas."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "25) De acordo com a Lei nº 8.112/90 (Estatuto dos Servidores Públicos Civis da União), a penalidade de suspensão aplicada a um servidor não pode ser superior a quantos dias?",
                        "opcoes": {
                            "A": "30 dias.",
                            "B": "60 dias.",
                            "C": "90 dias.",
                            "D": "120 dias.",
                            "E": "180 dias."
                        },
                        "resposta": "C"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS ESPECÍFICOS",
                "perguntas": [
                    {
                        "pergunta": "26) O corpo do úmero e a cabeça do rádio e da ulna formam qual articulação do esqueleto humano?",
                        "opcoes": {
                            "A": "Articulação do punho.",
                            "B": "Articulação do ombro.",
                            "C": "Articulação do cotovelo.",
                            "D": "Articulação do joelho.",
                            "E": "Articulação do tornozelo."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "27) Qual é a estrutura anatômica que divide o abdômen em quadrante superior direito, superior esquerdo, inferior direito e inferior esquerdo?",
                        "opcoes": {
                            "A": "Linha média.",
                            "B": "Plano transpilórico.",
                            "C": "Plano transumbilical.",
                            "D": "Plano sagital.",
                            "E": "Plano coronal."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "28) Qual a densidade ideal para um meio de contraste à base de bário para exames do trato gastrointestinal inferior?",
                        "opcoes": {
                            "A": "Baixa densidade.",
                            "B": "Alta densidade.",
                            "C": "Isodensa.",
                            "D": "Hiperdensa.",
                            "E": "Hipo-isodensa."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "29) Qual a partícula atômica que possui carga elétrica positiva?",
                        "opcoes": {
                            "A": "Nêutron.",
                            "B": "Próton.",
                            "C": "Elétron.",
                            "D": "Íon.",
                            "E": "Cátion."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "30) Qual é o maior osso do corpo humano?",
                        "opcoes": {
                            "A": "Crânio.",
                            "B": "Fíbula.",
                            "C": "Fêmur.",
                            "D": "Úmero.",
                            "E": "Tíbia."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "31) Qual é a linha que passa pelo centro do corpo e o divide em duas metades, direita e esquerda?",
                        "opcoes": {
                            "A": "Plano Coronal.",
                            "B": "Plano Axial.",
                            "C": "Plano Sagital.",
                            "D": "Plano Transverso.",
                            "E": "Plano oblíquo."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "32) Qual é o principal componente dos filmes radiográficos que reage com os raios-x para formar a imagem latente?",
                        "opcoes": {
                            "A": "Tungstato de cálcio.",
                            "B": "Brometo de prata.",
                            "C": "Nitrato de potássio.",
                            "D": "Sulfato de chumbo.",
                            "E": "Cloreto de sódio."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "33) De acordo com a Resolução CONTER nº 03/2011, que dispõe sobre o Código de Ética dos Profissionais das Técnicas Radiológicas, qual é o órgão máximo de fiscalização da profissão no Brasil?",
                        "opcoes": {
                            "A": "Conselho Regional de Medicina (CRM).",
                            "B": "Conselho Nacional de Técnicos em Radiologia (CONTER).",
                            "C": "Ministério da Saúde.",
                            "D": "Agência Nacional de Vigilância Sanitária (ANVISA).",
                            "E": "Conselho Federal de Medicina (CFM)."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "34) De acordo com o código de ética profissional, após a notificação de penalidade, qual é o prazo máximo para apresentar defesa junto ao Conselho Regional de Técnicos em Radiologia (CRTR)?",
                        "opcoes": {
                            "A": "15 dias úteis.",
                            "B": "30 dias úteis.",
                            "C": "30 dias corridos.",
                            "D": "60 dias úteis.",
                            "E": "60 dias corridos."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "35) A Lei Orgânica da Saúde, Lei nº 8.080/90, define o Sistema Único de Saúde (SUS) como um conjunto de ações e serviços de saúde. Qual dos princípios abaixo é um dos pilares do SUS?",
                        "opcoes": {
                            "A": "Exclusividade de acesso.",
                            "B": "Centralização.",
                            "C": "Hierarquização.",
                            "D": "Especialização.",
                            "E": "Federalização."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "36) Em ressonância magnética, qual a sequência que utiliza pulsos de radiofrequência de 90° e 180° para criar uma imagem que tem um alto contraste entre a matéria cinzenta e a branca?",
                        "opcoes": {
                            "A": "T1.",
                            "B": "T2.",
                            "C": "Flair.",
                            "D": "DWI.",
                            "E": "STIR."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "37) Qual a unidade de medida da atividade radioativa?",
                        "opcoes": {
                            "A": "Gray (Gy).",
                            "B": "Sievert (Sv).",
                            "C": "Curie (Ci).",
                            "D": "Becquerel (Bq).",
                            "E": "Coulomb (C)."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "38) Qual é o nome da membrana que envolve o coração?",
                        "opcoes": {
                            "A": "Pleura.",
                            "B": "Pericárdio.",
                            "C": "Diafragma.",
                            "D": "Peritônio.",
                            "E": "Mediastino."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "39) Qual é a função do revelador no processamento de filmes radiográficos?",
                        "opcoes": {
                            "A": "Tornar o filme transparente.",
                            "B": "Endurecer a gelatina do filme.",
                            "C": "Remover os haletos de prata não expostos.",
                            "D": "Converter a imagem latente em visível.",
                            "E": "Parar a ação do fixador."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "40) Na rotina para exame do punho, qual a projeção radiográfica que permite a visualização do osso pisiforme em perfil?",
                        "opcoes": {
                            "A": "PA Oblíqua.",
                            "B": "PA.",
                            "C": "Perfil com desvio ulnar.",
                            "D": "Perfil lateral.",
                            "E": "AP."
                        },
                        "resposta": "D"
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "nome": "(I.A) 2 - Tec. Radiologia - EDITAL N° 08/2023",
        "categorias": [
            {
                "nome": "LÍNGUA PORTUGUESA",
                "perguntas": [
                    {
                        "pergunta": "01) Qual das alternativas apresenta uma afirmação incorreta sobre a morfologia das palavras?",
                        "opcoes": {
                            "A": "O plural de 'pão' é 'pães'.",
                            "B": "O grau superlativo sintético de 'pobre' é 'paupérrimo'.",
                            "C": "A palavra 'rapidamente' é um advérbio de modo.",
                            "D": "A palavra 'incerto' é formada por prefixação.",
                            "E": "A palavra 'guarda-chuva' é um substantivo composto por aglutinação."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "02) Em qual das palavras abaixo a letra 'j' representa o mesmo fonema que em 'hoje'?",
                        "opcoes": {
                            "A": "Jeito.",
                            "B": "Gesto.",
                            "C": "Gira.",
                            "D": "Gesso.",
                            "E": "Girafa."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "03) Assinale a alternativa que contém uma palavra sem dígrafo consonantal:",
                        "opcoes": {
                            "A": "Nascido.",
                            "B": "Chuva.",
                            "C": "Pássaro.",
                            "D": "Excesso.",
                            "E": "Fiel."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "04) Qual palavra tem a divisão silábica correta?",
                        "opcoes": {
                            "A": "A-ca-de-mia.",
                            "B": "Ac-a-de-mi-a.",
                            "C": "A-ca-dem-ia.",
                            "D": "A-ca-de-mí-a.",
                            "E": "A-ca-de-mi-a."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "05) Qual das palavras a seguir é oxítona?",
                        "opcoes": {
                            "A": "Último.",
                            "B": "Anel.",
                            "C": "Médico.",
                            "D": "Amigo.",
                            "E": "Casa."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "06) Na frase 'Ele certamente virá ao evento.', qual a circunstância estabelecida pelo advérbio 'certamente'?",
                        "opcoes": {
                            "A": "Lugar.",
                            "B": "Dúvida.",
                            "C": "Afirmação.",
                            "D": "Tempo.",
                            "E": "Modo."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "07) Na frase 'A reunião acontecerá na sala principal.', qual a circunstância estabelecida pelo termo 'na sala principal'?",
                        "opcoes": {
                            "A": "Tempo.",
                            "B": "Modo.",
                            "C": "Afirmação.",
                            "D": "Lugar.",
                            "E": "Dúvida."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "08) Na oração 'O carro é dele.', qual a classe morfológica do termo 'dele'?",
                        "opcoes": {
                            "A": "Substantivo.",
                            "B": "Verbo.",
                            "C": "Adjetivo.",
                            "D": "Pronome.",
                            "E": "Artigo."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "09) Em qual das frases a crase está empregada corretamente?",
                        "opcoes": {
                            "A": "Ele se refere à você.",
                            "B": "Ele foi à pé.",
                            "C": "Fui à escola.",
                            "D": "Ele foi a praia.",
                            "E": "Ele vai à festas."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "10) Na frase 'O médico receitou o remédio ao paciente.', qual a função sintática dos termos 'o remédio' e 'ao paciente'?",
                        "opcoes": {
                            "A": "Sujeito e Objeto Direto.",
                            "B": "Objeto Direto e Objeto Indireto.",
                            "C": "Objeto Indireto e Objeto Direto.",
                            "D": "Predicativo do Sujeito e Objeto Direto.",
                            "E": "Objeto Direto e Adjunto Adnominal."
                        },
                        "resposta": "B"
                    }
                ]
            },
            {
                "nome": "MATEMÁTICA/RACIOCÍNIO LÓGICO",
                "perguntas": [
                    {
                        "pergunta": "11) Um motorista percorre 180 km em 2 horas. Qual a velocidade média em metros por segundo?",
                        "opcoes": {
                            "A": "20 m/s.",
                            "B": "25 m/s.",
                            "C": "30 m/s.",
                            "D": "35 m/s.",
                            "E": "40 m/s."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "12) A soma de dois números é 20 e a diferença entre eles é 4. Qual o valor do maior número?",
                        "opcoes": {
                            "A": "8.",
                            "B": "10.",
                            "C": "12.",
                            "D": "14.",
                            "E": "16."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "13) Uma loja oferece 20% de desconto em um produto que custa R$ 150,00. Qual o valor final do produto após o desconto?",
                        "opcoes": {
                            "A": "R$ 120,00.",
                            "B": "R$ 110,00.",
                            "C": "R$ 100,00.",
                            "D": "R$ 90,00.",
                            "E": "R$ 80,00."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "14) Qual a área de um círculo com raio de 5 cm? (Use $\\pi \\approx 3.14$)",
                        "opcoes": {
                            "A": "25,0 cm².",
                            "B": "31,4 cm².",
                            "C": "50,0 cm².",
                            "D": "78,5 cm².",
                            "E": "100,0 cm²."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "15) Em uma sala, 60% das pessoas são mulheres e o restante são homens. Se há 30 mulheres, quantas pessoas há no total na sala?",
                        "opcoes": {
                            "A": "40.",
                            "B": "45.",
                            "C": "50.",
                            "D": "55.",
                            "E": "60."
                        },
                        "resposta": "C"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS GERAIS/ATUALIDADES",
                "perguntas": [
                    {
                        "pergunta": "16) Qual das rotas abaixo foi uma das mais importantes rotas comerciais do Brasil Colônia, conectando a região mineradora de Minas Gerais ao litoral do Rio de Janeiro?",
                        "opcoes": {
                            "A": "Caminho do Peabiru.",
                            "B": "Estrada Real.",
                            "C": "Caminho dos Tropeiros.",
                            "D": "Caminho da Graciosa.",
                            "E": "Caminho de Goiás."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "17) Qual artista plástico brasileiro é conhecido por suas pinturas expressionistas e por ser uma das principais figuras da Semana de Arte Moderna de 1922?",
                        "opcoes": {
                            "A": "Di Cavalcanti.",
                            "B": "Romero Britto.",
                            "C": "Maurício de Sousa.",
                            "D": "Alfredo Volpi.",
                            "E": "Aleijadinho."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "18) Em 2024, uma operação da Polícia Federal desarticulou uma organização criminosa envolvida em fraudes em licitações e desvios de recursos públicos na área da saúde. Qual o nome dessa operação?",
                        "opcoes": {
                            "A": "Operação Lava Jato.",
                            "B": "Operação Ponto Final.",
                            "C": "Operação Carne Fraca.",
                            "D": "Operação Desvio Padrão.",
                            "E": "Operação Calvário."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "19) Em relação ao desastre da barragem de Fundão, em Mariana (MG), qual das empresas listadas não era parte da joint venture Samarco, responsável pela barragem?",
                        "opcoes": {
                            "A": "Vale.",
                            "B": "BHP Billiton.",
                            "C": "Samarco.",
                            "D": "Petrobras.",
                            "E": "Nenhuma das anteriores."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "20) Qual das marcas abaixo NÃO pertence ao portfólio de cervejas do Grupo Petrópolis?",
                        "opcoes": {
                            "A": "Lokal.",
                            "B": "Itaipava.",
                            "C": "Petra.",
                            "D": "Vila Alemã.",
                            "E": "Colorado."
                        },
                        "resposta": "E"
                    }
                ]
            },
            {
                "nome": "LEGISLAÇÃO",
                "perguntas": [
                    {
                        "pergunta": "21) Segundo a Lei Orgânica do município, qual a porcentagem máxima da receita tributária que a Câmara Municipal pode gastar em um ano com suas despesas?",
                        "opcoes": {
                            "A": "5%.",
                            "B": "7%.",
                            "C": "10%.",
                            "D": "15%.",
                            "E": "20%."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "22) Segundo a Constituição Federal de 1988, as eleições para Prefeito e Vice-Prefeito de um município com mais de 200 mil eleitores podem ter segundo turno. A eleição ocorrerá, se necessário, em qual data?",
                        "opcoes": {
                            "A": "No primeiro domingo de outubro.",
                            "B": "No segundo domingo de outubro.",
                            "C": "No último domingo de outubro.",
                            "D": "No primeiro domingo de novembro.",
                            "E": "No último domingo de novembro."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "23) No Brasil, quem é o responsável por julgar as contas do Presidente da República?",
                        "opcoes": {
                            "A": "O Supremo Tribunal Federal.",
                            "B": "O Senado Federal.",
                            "C": "O Tribunal de Contas da União, com posterior julgamento do Congresso Nacional.",
                            "D": "O Congresso Nacional, com o auxílio do Tribunal de Contas da União.",
                            "E": "O Ministério Público Federal."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "24) Conforme o Estatuto dos Servidores Públicos da União (Lei nº 8.112/90), qual das seguintes condutas não é considerada uma proibição ao servidor?",
                        "opcoes": {
                            "A": "Valer-se do cargo para lograr proveito pessoal.",
                            "B": "Receber propinas, comissões, presentes ou vantagens de qualquer espécie.",
                            "C": "Opor resistência injustificada ao andamento de documentos e processos.",
                            "D": "Exercer o comércio, exceto na qualidade de acionista, cotista ou comanditário.",
                            "E": "Promover manifestações de apreço ou desapreço no recinto da repartição."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "25) De acordo com o Estatuto dos Servidores Públicos do município de Tijucas do Sul, a advertência será aplicada em qual dos seguintes casos?",
                        "opcoes": {
                            "A": "Violação de proibição que não tipifique infração sujeita a demissão.",
                            "B": "Recusa injustificada a ser submetido a inspeção médica.",
                            "C": "Reincidência de falta punida com suspensão.",
                            "D": "Inassiduidade habitual.",
                            "E": "Acumulação ilegal de cargos, empregos ou funções públicas."
                        },
                        "resposta": "A"
                    }
                ]
            },
            {
                "nome": "CONHECIMENTOS ESPECÍFICOS",
                "perguntas": [
                    {
                        "pergunta": "26) O quadril é formado por quais ossos?",
                        "opcoes": {
                            "A": "Fêmur, patela e tíbia.",
                            "B": "Ílio, ísquio e púbis.",
                            "C": "Sacro, cóccix e fêmur.",
                            "D": "Ílio, sacro e fêmur.",
                            "E": "Púbis, sacro e cóccix."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "27) Qual ligamento está localizado no interior do joelho e ajuda a estabilizá-lo, prevenindo o movimento excessivo da tíbia para a frente?",
                        "opcoes": {
                            "A": "Ligamento cruzado posterior.",
                            "B": "Ligamento cruzado anterior.",
                            "C": "Ligamento colateral medial.",
                            "D": "Ligamento colateral lateral.",
                            "E": "Ligamento patelar."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "28) Em um exame de Tomografia Computadorizada, qual é a unidade de medida utilizada para quantificar a densidade dos tecidos?",
                        "opcoes": {
                            "A": "kVp (quilovolt pico).",
                            "B": "mAs (miliampere por segundo).",
                            "C": "Unidades Hounsfield (UH).",
                            "D": "Sievert (Sv).",
                            "E": "Gray (Gy)."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "29) Qual a partícula atômica que não possui carga elétrica?",
                        "opcoes": {
                            "A": "Nêutron.",
                            "B": "Próton.",
                            "C": "Elétron.",
                            "D": "Íon.",
                            "E": "Cátion."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "30) Qual é o osso que se articula com o fêmur, a tíbia e a fíbula, formando a articulação do tornozelo?",
                        "opcoes": {
                            "A": "Calcâneo.",
                            "B": "Tálus.",
                            "C": "Navicular.",
                            "D": "Cuneiforme.",
                            "E": "Cubóide."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "31) Qual é a linha de referência utilizada na radiologia do crânio que vai do canto externo do olho até o centro do meato acústico externo?",
                        "opcoes": {
                            "A": "Linha orbitomeatal (Linha de Reid).",
                            "B": "Linha interpupilar.",
                            "C": "Linha acantomeatal.",
                            "D": "Linha glabeloalveolar.",
                            "E": "Linha basiotemporal."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "32) A luz emitida por um ecrã na tela intensificadora é convertida em imagem visível. Qual é o sal mais comum usado para essa conversão?",
                        "opcoes": {
                            "A": "Hidróxido de cálcio.",
                            "B": "Nitrato de potássio.",
                            "C": "Tungstato de cálcio.",
                            "D": "Óxido de zinco.",
                            "E": "Cloreto de sódio."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "33) A Lei nº 7.394/85 regulamenta a profissão de Técnico e Tecnólogo em Radiologia. Qual a carga horária semanal máxima de trabalho para estes profissionais, conforme a lei?",
                        "opcoes": {
                            "A": "24 horas.",
                            "B": "30 horas.",
                            "C": "36 horas.",
                            "D": "40 horas.",
                            "E": "44 horas."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "34) De acordo com o Código de Ética Profissional, qual é a penalidade máxima que pode ser imposta ao profissional de radiologia, após processo ético-disciplinar?",
                        "opcoes": {
                            "A": "Advertência.",
                            "B": "Censura pública.",
                            "C": "Multa.",
                            "D": "Suspensão do exercício profissional.",
                            "E": "Cassação do exercício profissional."
                        },
                        "resposta": "E"
                    },
                    {
                        "pergunta": "35) A Lei nº 8.142/90, que regulamenta a participação da comunidade na gestão do SUS, estabelece a criação de dois importantes órgãos de controle social. Quais são eles?",
                        "opcoes": {
                            "A": "Conselhos de Saúde e Conferências de Saúde.",
                            "B": "Conselhos de Secretarias de Saúde.",
                            "C": "Agência Nacional de Saúde Suplementar (ANS) e Agência Nacional de Vigilância Sanitária (ANVISA).",
                            "D": "Ouvidoria do SUS e Ministério Público.",
                            "E": "Conselho Nacional de Saúde e Tribunal de Contas."
                        },
                        "resposta": "A"
                    },
                    {
                        "pergunta": "36) Em ressonância magnética, o que é a sequência T2?",
                        "opcoes": {
                            "A": "É a sequência que realça a matéria cinzenta.",
                            "B": "É a sequência que suprime o sinal de gordura.",
                            "C": "É a sequência que tem um alto contraste entre a matéria cinzenta e a branca.",
                            "D": "É a sequência que realça o edema e lesões com alto teor de água.",
                            "E": "É a sequência que usa pulso de 180° para reduzir o tempo de aquisição."
                        },
                        "resposta": "D"
                    },
                    {
                        "pergunta": "37) A dose absorvida é uma grandeza radiológica fundamental. Qual a sua unidade de medida no Sistema Internacional de Unidades (SI)?",
                        "opcoes": {
                            "A": "Sievert (Sv).",
                            "B": "Gray (Gy).",
                            "C": "Roentgen (R).",
                            "D": "Becquerel (Bq).",
                            "E": "Coulomb (C)."
                        },
                        "resposta": "B"
                    },
                    {
                        "pergunta": "38) Qual é o nome do espaço potencial entre a pleura parietal e a pleura visceral, que contém uma pequena quantidade de líquido?",
                        "opcoes": {
                            "A": "Saco pericárdico.",
                            "B": "Mediastino.",
                            "C": "Cavidade pleural.",
                            "D": "Diafragma.",
                            "E": "Cavidade abdominal."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "39) Qual é o componente do fixador que dissolve os cristais de haleto de prata que não foram expostos à luz, tornando a imagem permanente?",
                        "opcoes": {
                            "A": "Sulfito de sódio.",
                            "B": "Sulfato de potássio.",
                            "C": "Hipossulfito de sódio.",
                            "D": "Brometo de potássio.",
                            "E": "Ácido acético."
                        },
                        "resposta": "C"
                    },
                    {
                        "pergunta": "40) Na radiologia do ombro, qual a projeção que é mais indicada para visualizar a articulação glenoumeral em perfil, com o paciente em decúbito lateral?",
                        "opcoes": {
                            "A": "AP.",
                            "B": "Incidência de Grashey.",
                            "C": "Incidência de Lawrence.",
                            "D": "Incidência de Neer.",
                            "E": "Incidência de Stryker."
                        },
                        "resposta": "C"
                    }
                ]
            }
        ]
    }
]