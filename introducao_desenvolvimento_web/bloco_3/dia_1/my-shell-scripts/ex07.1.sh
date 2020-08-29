#!/bin/bash
WAY=$1
echo $WAY

if [ -d $WAY ]
    then
        TOTAL=`ls -l $WAY | wc -l`
        echo "O $WAY tem $TOTAL arquivos"
    else 
        echo "$WAY não é um diretório"    
fi

#/home/alexandre/Cursos/Trybe/shellScript/teste.sh