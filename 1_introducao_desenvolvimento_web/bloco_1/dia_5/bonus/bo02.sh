#!/bin/bash
WAY=$*
echo $WAY

if [ -d $WAY ]
    then
        echo "$WAY é um diretório"
elif [ -f $WAY ]
    then
        echo "$WAY é um arquivo comum"

else 
    echo "$WAY é outro arquivo qualquer"    
fi

ls -l $WAY
#/home/alexandre/Cursos/Trybe/shellScript/teste.sh


#. Escreva um Shell Script que renomeie todos os arquivos do diretório 
#atual que terminam em ".png", de forma que o nome do arquivo comece com a
#data atual no formato "YYYY-MM-DD". Por exemplo, se tiver um arquivo com
#o nome "kitten.png" no diretório atual, e a data de hoje for 16/04/2020, 
#o script deverá mudar o nome do arquivo para "2020-04-16-kitten.png".

 