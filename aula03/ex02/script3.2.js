alert('Olá! Vamos verificar quanto de combustível você gastou na sua viagem.');
kmlitro=prompt('Quantos Km seu carro faz por litro?');
horas=prompt('Por quanto tempo você viajou? (Em horas)');
vel=prompt('Qual velocidade você estava?');
document.write('Você gastou ', vel*(horas/kmlitro), ' litros de combustível nesta viagem!');