dist=prompt('Qual a distância percorrida em Km?');
tempo=prompt('Quanto tempo durou a corrida em minutos?');
total=2+(dist*1.4)+(tempo*0.26)

dados.innerHTML=`Distância Percorrida: ${dist} Km<br> 
                Tempo de Duração: ${tempo} minutos <br>
                Sua corrida ficou em R$ ${total.toFixed(2)}`;