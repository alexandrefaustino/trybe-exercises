#!/bin/bash
read -p "Digite um caminho de arquivo ou diretório: " WAY
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