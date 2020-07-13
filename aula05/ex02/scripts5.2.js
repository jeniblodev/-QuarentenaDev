// Regra do negócio: 2 + distância(km)*1.4 + tempo(min)*0.26

dist = prompt ('Informe a distância a ser percorrida (km):');
tempo = prompt ('Informe a duração da viagem (min):');
total = 2+(dist*1.4)+(tempo*0.26);
document.write('<h3><br>Você percorreu ', dist, 'km em ',tempo, ' minutos.<br>Sua corrida fica em R$', total.toFixed(2), '.</h3>');
